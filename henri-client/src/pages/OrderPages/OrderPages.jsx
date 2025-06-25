import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContextProvider";
import axios from "axios";
import { toast } from "react-toastify";

const OrderPages = () => {
  const orderFood = useLoaderData();
  const { user } = useContext(AuthContext);
  const { displayName, email } = user || {};
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const orderQuantity = parseInt(form.orderQuantity.value);
    const availableQuantity = parseInt(form.availableQuantity.value);

    const orderData = {
      orderFoodName: form.orderFoodName.value,
      orderFoodId: orderFood._id,
      origin: orderFood.origin,
      orderFoodPhotoURL: orderFood.photoURL,
      orderCategory: form.orderCategory.value,
      orderFoodprice: parseFloat(form.orderFoodprice.value),
      description: form.orderDescription.value,
      availableQuantity,
      orderQuantity,
      sellerName: form.sellerName.value,
      buyerName: form.buyerName.value || "Guest",
      buyerEmail: form.buyerEmail.value || "guest@example.com",
      Date: new Date().toISOString(),
    };
    if (availableQuantity === 0) {
      toast.warning("The item is not available");
      return;
    }
    if (email === orderFood.email) {
      toast.warning("You cannot order your own food.");
      return;
    }
    if (orderQuantity < 1) {
      toast.warning("Order quantity must be at least 1");
      return;
    }

    if (orderQuantity > availableQuantity) {
      toast.warning("Order quantity exceeds available quantity");
      return;
    }

    try {
      setIsSubmitting(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://henri-server.vercel.app/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.insertedId) {
        toast.success("Order placed successfully");
        navigate("/my-orders");
        form.reset();
      } else {
        toast.error("Failed to place order");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center min-h-screen mt-24 flex items-center justify-center mb-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 mt-4 w-full max-w-xl p-6 bg-base-200 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold">Order Page</h1>
        <img
          src={orderFood?.photoURL}
          alt={orderFood?.foodName}
          className="w-30 rounded-3xl shadow-md mx-auto"
        />
        <label className="floating-label block">
          <span className="font-bold">Food Name</span>
          <input
            type="text"
            name="orderFoodName"
            required
            readOnly
            defaultValue={orderFood?.foodName}
            className="input input-md w-full"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="floating-label block">
            <span className="font-bold">Category</span>
            <input
              type="text"
              readOnly
              name="orderCategory"
              className="input input-md w-full"
              defaultValue={orderFood?.category}
            />
          </label>
          <label className="floating-label block">
            <span className="font-bold">Price ($)</span>
            <input
              name="orderFoodprice"
              type="number"
              required
              readOnly
              className="input validator input-md w-full"
              defaultValue={orderFood?.price}
            />
          </label>
        </div>

        <label className="floating-label block">
          <span className="font-bold">Description</span>
          <textarea
            name="orderDescription"
            required
            minLength={25}
            readOnly
            placeholder="Describe what needs to be done"
            className="textarea textarea-md w-full"
            defaultValue={
              orderFood?.description
                ? orderFood.description.slice(0, 25) + "..."
                : ""
            }
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="floating-label block">
            <span className="font-bold">Available Quantity</span>
            <input
              name="availableQuantity"
              required
              readOnly
              type="number"
              min={1}
              className="input input-md w-full"
              defaultValue={orderFood?.quantity}
            />
          </label>
          <label className="floating-label block">
            <span className="font-bold">Your Order Quantity</span>
            <input
              name="orderQuantity"
              required
              type="number"
              min={1}
              placeholder="Enter your order quantity"
              className="input validator input-md w-full"
            />
            <p className="validator-hint">Minimum order quantity is 1.</p>
          </label>
        </div>

        <label className="floating-label block">
          <span className="font-bold">Seller Name</span>
          <input
            name="sellerName"
            defaultValue={orderFood?.username}
            type="text"
            readOnly
            className="input text-stone-500 validator input-md w-full"
          />
        </label>

        <label className="floating-label block">
          <span className="font-bold">Your Name</span>
          <input
            name="buyerName"
            defaultValue={displayName || ""}
            type="text"
            className="input validator input-md w-full"
            readOnly
            placeholder="Enter your name"
          />
        </label>

        <label className="floating-label block">
          <span className="font-bold">Your Email</span>
          <input
            name="buyerEmail"
            defaultValue={email || ""}
            type="email"
            readOnly
            className="input validator input-md w-full"
            placeholder="Enter your email"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn hover:bg-[#27634e] text-white bg-[#328166] w-full ${
            orderFood?.quantity === 0 && "bg-gray-400 hover:bg-gray-400"
          } `}
        >
          {isSubmitting ? "Submitting..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default OrderPages;
