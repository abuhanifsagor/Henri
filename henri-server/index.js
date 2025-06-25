const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { messaging } = require("firebase-admin");

//  mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@vanisher.hqkezkc.mongodb.net/?retryWrites=true&w=majority&appName=Vanisher`;

// middleware
app.use(cors());
app.use(express.json());

// JWT Middleware
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send({ message: "Forbidden" });

    req.decoded = decoded;
    next();
  });
}
// routes
app.get("/", (req, res) => {
  res.send("This the main route of Henri");
});

// listen
app.listen(port, () => {
  // console.log(`This server is running on ${port}`);
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    // await client.connect();

    // Collections
    const foodsCollection = client.db("henriDB").collection("allFoods");
    const userCommentsCollection = client
      .db("henriDB")
      .collection("userComments");
    // Orders Collection
    const ordersCollection = client.db("henriDB").collection("orders");

    // JWT endpoint
    app.post("/jwt", (req, res) => {
      const { email } = req.body;
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.send({ token });
    });
    // get 6  food
    app.get("/foods", async (req, res) => {
      try {
        const result = await foodsCollection
          .find()
          .sort({ sells: -1 })
          .limit(6)
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch  food" });
      }
    });
    // get all  food
    app.get("/allFoods", async (req, res) => {
      try {
        const { search } = req.query;

        let query = {};
        if (search) {
          query = {
            foodName: { $regex: search, $options: "i" },
          };
        }

        const result = await foodsCollection
          .find(query)
          .sort({ sells: -1 })
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch foods" });
      }
    });

    // add task
    app.post("/addFood", verifyJWT, async (req, res) => {
      const newTask = req.body;
      const taskWithBidCount = { ...newTask, sells: 0 };
      const result = await foodsCollection.insertOne(taskWithBidCount);
      res.send(result);
    });

    // data get by single id
    app.get("/allFoods/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodsCollection.findOne(query);
      res.send(result);
    });

    // update task
    app.put("/allFoods/:id", async (req, res) => {
      const id = req.params.id;
      const updatedTask = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: false };

      const updateDoc = {
        $set: updatedTask,
      };

      try {
        const result = await foodsCollection.updateOne(
          filter,
          updateDoc,
          options
        );
        res.send(result);
      } catch (error) {
        console.error("Update Error:", error);
      }
    });

    // delete task
    app.delete("/allFoods/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodsCollection.deleteOne(query);
      res.send(result);
    });

    // user comments
    app.post("/comments", async (req, res) => {
      const comment = req.body;
      comment.createdAt = new Date();
      const result = await userCommentsCollection.insertOne(comment);
      res.send(result);
    });

    // get comments
    app.get("/comments", async (req, res) => {
      const comments = await userCommentsCollection
        .find()
        .sort({ createdAt: -1 })
        .toArray();
      res.send(comments);
    });

    // increment
    app.patch("/allFoods/:id/sells", async (req, res) => {
      const { id } = req.params;

      const result = await foodsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $inc: { sells: 1 } }
      );
      res.send(result);
    });

    // Like a comment
    app.patch("/comments/:id/like", async (req, res) => {
      const id = req.params.id;
      const result = await userCommentsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $inc: { likes: 1 } }
      );
      res.send(result);
    });

    // Place an order
    app.post("/orders", verifyJWT, async (req, res) => {
      try {
        const order = req.body;

        const result = await ordersCollection.insertOne(order);

        await foodsCollection.updateOne(
          { _id: new ObjectId(order.orderFoodId) },
          {
            $inc: {
              quantity: -order.orderQuantity,
              sells: 1,
            },
          }
        );

        res.send({ insertedId: result.insertedId });
      } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).send({ error: "Failed to place order" });
      }
    });

    // Get all orders
    app.get("/orders", verifyJWT, async (req, res) => {
      try {
        const orders = await ordersCollection
          .find()
          .sort({ orderDate: -1 })
          .toArray();
        res.send(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).send({ error: "Failed to fetch orders" });
      }
    });
    // Delete a  order by ID
    app.delete("/orders/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const result = await ordersCollection.deleteOne({
          _id: new ObjectId(id),
        });

        res.send(result);
      } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).send({ error: "Failed to delete order" });
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
