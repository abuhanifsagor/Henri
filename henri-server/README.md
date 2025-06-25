# 🍽️ Henri – Backend Server

Welcome to the **Henri** backend server, built with **Node.js**, **Express.js**, and **MongoDB**. This API powers the entire restaurant platform by managing food items, user authentication (JWT), orders, and user comments.

---

## 🌍 Live API

- **Live API URL:** [[Live API ](https://henri-server.vercel.app/)] 

---

## 📦 Project Structure

📁 henri-backend/
├── index.js # Main server entry
├── .env # Environment variables
└── package.json

---

## ⚙️ Environment Variables

To run this server locally, create a `.env` file in the root directory of your server project with the following:

```env
PORT=3000 # Or your preferred port (e.g., 3000, 5000)
DB_USER=yourMongoUser
DB_PASSWORD=yourMongoPassword
JWT_SECRET=your_jwt_secret_key

## 🧪 **API Endpoints**

| Method | Endpoint                    | Description                                                                 |
| ------ | --------------------------- | --------------------------------------------------------------------------- |
| GET    | `/foods`                    | Get 6 most purchased food items                                             |
| GET    | `/allFoods`                 | Get all food items (supports search)                                        |
| GET    | `/allFoods/:id`             | Get a food item by ID                                                       |
| POST   | `/addFood`                  | Add a new food item (Protected)                                             |
| PUT    | `/allFoods/:id`             | Update an existing food item by ID                                          |
| DELETE | `/allFoods/:id`             | Delete a food item by ID                                                    |
| PATCH  | `/allFoods/:id/sells`       | Increment the purchase count on a food item                                 |
| POST   | `/comments`                 | Add a new comment                                                           |
| GET    | `/comments`                 | Get all comments (sorted by latest)                                         |
| PATCH  | `/comments/:id/like`        | Increment like count on a comment                                           |
| POST   | `/orders`                   | Place a new food order (Protected)                                          |
| GET    | `/orders`                   | Get all food orders (Protected)                                             |
| DELETE | `/orders/:id`               | Delete an order by ID                                                       |
| POST   | `/jwt`                      | Generate a JWT token for authentication                                     |

---

# 🔒 **Security**

- CORS enabled
- Environment variables used for credentials
- Express JSON parser middleware
- WT Authentication: Private routes are protected, requiring a valid JWT for access.

---
```
