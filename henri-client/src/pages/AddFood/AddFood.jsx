import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user || {};
  const [loading, setLoading] = useState(false);

  const handeleFromsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    newTask.quantity = parseInt(newTask.quantity);

    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await axios.post(
        "https://henri-server.vercel.app/addFood",
        newTask,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Food Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    } catch (error) {
      console.error("Add Food Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        position: "center",
        timer: 1500,
        showConfirmButton: false,
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center">
      <Helmet>
        <title> Henri - Add Task </title>
      </Helmet>
      <div className="container px-4  mx-auto">
        <h1 className="text-3xl font-semibold">
          Add Your Foods to - <b className="text-[#C63814]">Henri</b>
        </h1>
        <div className="mt-8 pb-5    ">
          <div className="max-w-3xl  border rounded-2xl border-base-300  mx-auto py-10 p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Add Foods Menu
            </h2>
            <form onSubmit={handeleFromsubmit} className="space-y-5">
              <label className="floating-label block">
                <span>Foods Name</span>
                <input
                  type="text"
                  name="foodName"
                  required
                  placeholder="Enter foods name"
                  minLength={5}
                  className="input validator input-md w-full"
                />
                <p>Must be at least 5 characters</p>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="floating-label block">
                  <span>Food Category</span>
                  <select
                    name="category"
                    required
                    className="input validator select input-md w-full"
                  >
                    <option disabled selected defaultValue={" "}>
                      Select a category
                    </option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Salad">Salad</option>
                    <option value="Soup">Soup</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Grilled">Grilled</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Traditional">Traditional</option>
                  </select>
                  <p className="validator-hint">Required</p>
                </label>

                <label className="floating-label block">
                  <span>Price ($)</span>
                  <input
                    name="price"
                    type="number"
                    required
                    min="5"
                    placeholder="Enter your Price"
                    className="input validator input-md w-full"
                  />
                  <p className="validator-hint">Must be at least 5$</p>
                </label>
              </div>
              <label className="floating-label block">
                <span>Photo URL</span>
                <input
                  name="photoURL"
                  required
                  placeholder="Photo URL"
                  className="input input-md w-full"
                  type="url"
                  defaultValue={"https://i.ibb.co/YFqFN7pM/image.png"}
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="floating-label block">
                  <span>Quantity</span>
                  <input
                    name="quantity"
                    required
                    min="1"
                    placeholder="Quantity"
                    className="input input-md w-full"
                    type="number"
                  />
                </label>
                <label className="floating-label block">
                  <span>Quantity</span>
                  <input
                    name="origin"
                    required
                    placeholder="Origin"
                    className="input input-md w-full"
                    type="text"
                  />
                </label>
              </div>
              <label className="floating-label block">
                <span>Description</span>
                <textarea
                  name="description"
                  required
                  minLength={25}
                  placeholder="Describe what needs to be done"
                  className="textarea textarea-md w-full"
                />
              </label>

              <input
                type="text"
                readOnly
                name="username"
                placeholder={displayName}
                defaultValue={displayName}
                className="input text-stone-400 input-md w-full"
              />

              <input
                type="text"
                readOnly
                name="email"
                defaultValue={email}
                placeholder={email}
                className="input text-stone-400 input-md w-full"
              />
              <button
                type="submit"
                className={`btn hover:bg-[#27634e] text-white bg-[#328166] w-full ${
                  loading ? "cannot" : ""
                }`}
              >
                {loading ? "Adding food..." : "Add Food"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
