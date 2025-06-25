import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateTask = ({ updateTaskID, onTaskUpdated }) => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const [task, setTask] = useState({});

  useEffect(() => {
    if (updateTaskID) {
      fetch(`https://henri-server.vercel.app/allFoods`)
        .then((res) => res.json())
        .then((data) => {
          const foundTask = data.find((task) => task._id === updateTaskID);
          setTask(foundTask || {});
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [updateTaskID]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromdata = new FormData(form);
    const updatedTask = Object.fromEntries(fromdata.entries());
    updatedTask.quantity = parseInt(updatedTask.quantity);
    fetch(`https://henri-server.vercel.app/allFoods/${updateTaskID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updated = { ...task, ...updatedTask, _id: updateTaskID };
          setTask(updated);
          Swal.fire({
            icon: "success",
            title: "Food Data Updated Successfully",
            showConfirmButton: false,
            timer: 1000,
          });

          if (onTaskUpdated) {
            onTaskUpdated(updated);
          }

          document.getElementById("my_modal_3").close();
        } else {
          toast.info("No changes were made.");
        }
      })
      .catch(() => {
        toast.error("Failed to update task");
      });
  };

  return (
    <form onSubmit={handleUpdateTask} className="space-y-5 mt-4">
      <label className="floating-label block">
        <span>Food Name</span>
        <input
          type="text"
          name="foodName"
          required
          defaultValue={task?.foodName}
          placeholder="Enter task title"
          minLength={5}
          className="input validator input-md w-full"
        />
        <p>Must be at least 5 characters</p>
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="floating-label block">
          <span>Category</span>
          <select
            name="category"
            required
            className=" select validator  input-md w-full"
            defaultValue={task?.category}
          >
            <option selected disabled value={task?.category}>
              {task?.category}
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
            placeholder="Enter your price"
            min={5}
            className="input validator input-md w-full"
            defaultValue={task?.price}
          />
          <p className="validator-hint">Must be at least 5 $ </p>
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
          defaultValue={task?.photoURL}
        />
      </label>

      <label className="floating-label block">
        <span>Description</span>
        <textarea
          name="description"
          required
          minLength={25}
          placeholder="Describe what needs to be done"
          className="textarea  textarea-md w-full"
          defaultValue={task?.description}
        />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="floating-label block">
          <span>Quntity</span>
          <input
            name="quantity"
            required
            type="number"
            min={1}
            className="input input-md w-full"
            defaultValue={task?.quantity}
          />
        </label>
        <label className="floating-label block">
          <span>Origin</span>
          <input
            name="origin"
            required
            type="text"
            min={1}
            className="input input-md w-full"
            defaultValue={task?.origin}
          />
        </label>
      </div>

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
        className="btn hover:bg-[#27634e] text-white bg-[#328166] w-full"
      >
        Update Task
      </button>
    </form>
  );
};

export default UpdateTask;
