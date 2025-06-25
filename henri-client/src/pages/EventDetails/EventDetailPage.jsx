"use client";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

import { TiStarFullOutline } from "react-icons/ti";
import CommentsSection from "../../components/Comments/CommentsSection";
import { FcInfo } from "react-icons/fc";

const EventDetailPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [relatedtasks, setRelatedtasks] = useState([]);
  const [progressValues, setProgressValues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const randomValues = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 101)
    );
    setProgressValues(randomValues);
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch("https://henri-server.vercel.app/allFoods")
      .then((response) => response.json())
      .then((data) => {
        const selectedTask = data.find((t) => t._id === taskId);
        setTask(selectedTask);

        const shuffledTasks = data
          .filter((t) => t._id !== taskId)
          .sort(() => Math.random() - 0.5);

        setRelatedtasks(shuffledTasks);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, [taskId]);
  if (loading) {
    return;
  }
  if (!task) {
    return (
      <div className="flex justify-center items-center h-screen px-5">
        <div className="max-w-xl text-xl text-center">
          The task you are looking for is not found , please try again or
          contact us
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title> Henri - Food Details </title>
      </Helmet>

      <section className="min-h-screen mt-10">
        <div className="container min-h-screen p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  items-start justify-between">
            <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
              Food Details
            </span>
          </div>
          <div className="md:grid mt-15 flex flex-col grid-cols-12 gap-6">
            <div className="w-full order-1 h-64 rounded sm:h-96 md:col-span-7  bg-base-300">
              <img
                loading="lazy"
                src={task?.photoURL}
                alt={task?.taskTitle}
                className="object-contain object-center w-full h-full "
              />
            </div>

            <div className="p-6  relative   order-0 md:order-2 space-y-2 md:col-span-5">
              <div className="flex items-center gap-5">
                <h3 className="text-xl md font-semibold sm:text-4xl">
                  {task?.foodName}
                </h3>
              </div>
              <p>
                <b>Seller:</b> {task?.username}
              </p>
              <p>
                <strong>Price:</strong> {task?.price} $
              </p>
              <p>
                <strong>Quntity:</strong> {task?.quantity}
              </p>
              <p>
                <strong>Country:</strong> {task?.origin}
              </p>
              <p>
                <strong>Total Sells:</strong> {task?.sells}
              </p>
              <p>
                <strong>Contact:</strong> {task?.email}
              </p>

              <div className="w-full lg:absolute lg:bottom-0">
                <button className="relative mt-5 cursor-pointer px-5 py-2 font-medium w-2/3  text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#245749] group-hover:bg-[#173d33c7] group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#173d33c7] group-hover:bg-[#245749] group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#245749] -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#173d33c7] -rotate-12"></span>

                  <Link
                    to={`/Order/${task?._id}`}
                    task={task}
                    className="relative"
                  >
                    Place a Order
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-between">
            <div className="mt-12   space-y-3 md:max-w-md lg:max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">Foods Description</h2>
              <p className="text-2xl md:text-3xl font-bold">
                {task?.taskTitle}
              </p>

              <div className="flex gap-3 flex-col md:flex-row md:gap-5">
                <p>
                  <b>Category:</b> {task?.category}
                </p>
              </div>
              <p>
                <b>
                  Ingredients: <br />
                </b>
                <span dangerouslySetInnerHTML={{ __html: task?.description }} />
              </p>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold py-4">Rating</h2>
                {progressValues.map((value, index) => (
                  <span key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-between  w-8 ">
                      {index + 1}{" "}
                      <TiStarFullOutline className="text-yellow-400" />
                    </span>{" "}
                    <progress
                      className="progress progress-warning  max-w-md"
                      value={value}
                      max="100"
                    ></progress>
                  </span>
                ))}
              </div>

              <CommentsSection taskId={taskId} />
            </div>
            <div className="max-w-3xl mx-auto my-10 px-4">
              <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="restaurant-faq" defaultChecked />
                <div className="collapse-title font-semibold">
                  How do I place an order on this website?
                </div>
                <div className="collapse-content text-sm">
                  Simply browse the menu, select your favorite dishes, and click
                  the <strong>"Order Now"</strong> button. You can review your
                  cart and complete your order by providing delivery details and
                  payment information.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="restaurant-faq" />
                <div className="collapse-title font-semibold">
                  What payment methods do you accept?
                </div>
                <div className="collapse-content text-sm">
                  We accept multiple payment options including cash on delivery,
                  credit/debit cards, and mobile payment platforms like bKash
                  and PayPal for your convenience and security.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="restaurant-faq" />
                <div className="collapse-title font-semibold">
                  How can I be sure the food quality is good?
                </div>
                <div className="collapse-content text-sm">
                  We prepare all dishes fresh daily using quality ingredients.
                  You can also check customer reviews and ratings on each dish
                  to help you make an informed choice.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="restaurant-faq" />
                <div className="collapse-title font-semibold">
                  Can I modify or cancel my order?
                </div>
                <div className="collapse-content text-sm">
                  Orders can be modified or canceled within 10 minutes of
                  placement. Please contact our support team immediately for
                  assistance.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 ">
            <h2 className="text-3xl font-bold mb-6">Related tasks</h2>
            {relatedtasks.length > 0 ? (
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {relatedtasks.map((relatedEvent) => (
                  <SwiperSlide key={relatedEvent._id}>
                    <EventCard event={relatedEvent} />
                  </SwiperSlide>
                ))}
                <br />
                <br />
              </Swiper>
            ) : (
              <p>No related tasks found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailPage;
