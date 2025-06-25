import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { TiDelete } from "react-icons/ti";
import { CiBitcoin, CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UpdateTask from "../../components/UpdateTask/UpdateTask";
import Loading from "../../components/Loading/Loading";

const MyPostingFood = () => {
  const { user } = useContext(AuthContext);
  const [mytask, setMyTask] = useState(null);
  const [updateTaskID, setUpdateTaskID] = useState(null);
  useEffect(() => {
    fetch("https://henri-server.vercel.app/allFoods")
      .then((response) => response.json())
      .then((data) => {
        const myTasks = data.filter((task) => task?.email === user?.email);
        setMyTask(myTasks);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, [user]);

  if (!mytask) return <Loading></Loading>;

  const handleDeleteTask = (deleteTaskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://henri-server.vercel.app/allFoods/${deleteTaskId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingTasks = mytask.filter(
                (task) => task._id !== deleteTaskId
              );
              setMyTask(remainingTasks);
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          })
          .catch((error) => {
            console.error("Failed to delete task:", error);
          });
      }
    });
  };

  const handleEditTask = (editTaskId) => {
    setUpdateTaskID(editTaskId);
    document.getElementById("my_modal_3").showModal();
  };

  const handleTaskUpdated = (updatedTask) => {
    setMyTask((prev) =>
      prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  return (
    <div className="min-h-screen mt-30 px-5">
      <div className="container mx-auto mt-10">
        <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
          My Posting Food's
        </span>
        <div
          className={`min-h-screen  ${
            mytask.length === 0 ? "flex items-center justify-center" : ""
          } `}
        >
          {mytask.length > 0 ? (
            <div className="max-w-6xl w-full mx-auto mb-10 py-15 mt-15">
              <ul className="list bg-base-200 rounded-3xl shadow-lg">
                <li className="p-4 px-4 pb-2 text-sm opacity-60 tracking-wide">
                  <span>Recent posted Foods</span>
                  <span className="float-right">Total: {mytask.length}</span>
                </li>
                {mytask.map((event) => (
                  <li key={event?._id} className="list-row">
                    <Link title="View Task" to={`/foods/${event?._id}`}>
                      <div>
                        <img
                          className="size-10 rounded-box"
                          src={event?.photoURL}
                          alt="task"
                        />
                      </div>
                    </Link>
                    <div>
                      <Link title="View Task" to={`/foods/${event?._id}`}>
                        <div>{event?.foodName}</div>
                        <div className="text-xs flex flex-col md:flex-row uppercase font-semibold gap-3 opacity-60">
                          {event?.category}
                          <span>Quantity: {event?.quantity}</span>
                          <span>Price: {event?.price}</span>
                        </div>
                      </Link>
                    </div>

                    <p className="list-col-wrap -mt-10 md:mt-0 w-full  text-xs">
                      {event?.description?.slice(0, 120)}...
                    </p>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg">Update Task</h3>
                        <UpdateTask
                          updateTaskID={updateTaskID}
                          onTaskUpdated={handleTaskUpdated}
                        />
                      </div>
                    </dialog>

                    <dialog id="my_modal_4" className="modal ">
                      <div className="modal-box max-w-xs min-h-30">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg mb-4">
                          Task Total Bids
                        </h3>
                      </div>
                    </dialog>

                    <div className="flex md:flex-row flex-col gap-2">
                      <button className="btn opacity-0 btn-square hover:text-white font-extrabold text-2xl btn-warning btn-outline">
                        <CiBitcoin />
                      </button>
                      <button
                        onClick={() => handleEditTask(event?._id)}
                        className="btn btn-square hover:text-white font-extrabold text-2xl btn-success btn-outline"
                      >
                        <CiEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(event?._id)}
                        className="btn hover:text-white text-xl btn-square btn-outline btn-error"
                      >
                        <TiDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex lg:w-1/2 py-20 w-10/12 bg-[#1f4b3f4b] shadow-orange-400 shadow-sm rounded-3xl flex-col items-center">
              <h1 className="text-3xl font-bold text-center mt-10">
                You have no posted task
              </h1>
              <Link to="/add-food">
                <button className="btn text-white bg-[#1F4B3F] mt-5">
                  Add Task
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPostingFood;
