import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState(null);
  useEffect(() => {
    if (!user?.email) return;

    const token = localStorage.getItem("token");

    fetch("https://henri-server.vercel.app/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch orders, status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        const filteredOrders = data.filter(
          (order) => order?.buyerEmail === user.email
        );
        setMyOrders(filteredOrders);
      })
      .catch((error) => {
        console.error("Failed to fetch orders:", error);
      });
  }, [user]);

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will cancel your order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://henri-server.vercel.app/orders/${orderId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myOrders.filter(
                (order) => order._id !== orderId
              );
              setMyOrders(remaining);
              Swal.fire(
                "Cancelled!",
                "Your order has been cancelled.",
                "success"
              );
            }
          })
          .catch((err) => {
            console.error("Error cancelling order:", err);
          });
      }
    });
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);

    return date.toLocaleString("en-GB", {
      timeZone: "Asia/Dhaka",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (!myOrders) return <Loading />;

  return (
    <div className="min-h-screen mt-30 px-5">
      <div className="container mx-auto mt-10">
        <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
          My Ordered Foods
        </span>

        <div
          className={`min-h-screen ${
            myOrders.length === 0 ? "flex items-center justify-center" : ""
          }`}
        >
          {myOrders.length > 0 ? (
            <div className="max-w-6xl w-full mx-auto mb-10 py-15 mt-15">
              <ul className="list bg-base-200 rounded-3xl shadow-lg">
                <li className="p-4 px-4 pb-2 text-sm opacity-60 tracking-wide">
                  <span>Recent Orders</span>
                  <span className="float-right">Total: {myOrders.length}</span>
                </li>

                {myOrders.map((order) => (
                  <li key={order._id} className="list-row">
                    <Link title="View Food" to={`/foods/${order.orderFoodId}`}>
                      <div>
                        <img
                          className="size-15 rounded-box shadow-md"
                          src={order?.orderFoodPhotoURL}
                          alt="order"
                        />
                      </div>
                    </Link>

                    <div>
                      <Link
                        title="View Food"
                        to={`/foods/${order.orderFoodId}`}
                      >
                        <div>{order?.foodName}</div>
                        <div className="text-xs flex flex-col md:flex-row uppercase font-semibold gap-3 opacity-60">
                          {order?.category}
                          <span>Quantity: {order?.orderQuantity || 1}</span>
                          <span>Price: ${order?.orderFoodprice}</span>
                          <span>Date: {formatDate(order?.Date)}</span>
                        </div>
                      </Link>
                      <br />
                      <p className="max-w-sm text-xs opacity-60 font-semibold">
                        Discription: {order?.description.slice(0, 50)}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        className="btn btn-outline btn-error btn-sm flex items-center gap-2"
                      >
                        <TiDelete />
                        Cancel Order
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex lg:w-1/2 py-20 w-10/12 bg-[#1f4b3f4b] shadow-orange-400 shadow-sm rounded-3xl flex-col items-center">
              <h1 className="text-3xl font-bold text-center mt-10">
                You have no orders yet
              </h1>
              <Link to="/all-Foods">
                <button className="btn text-white bg-[#1F4B3F] mt-5">
                  Browse Foods
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
