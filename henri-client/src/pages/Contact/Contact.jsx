import React from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully.");
    e.target.reset();
  };
  return (
    <div className="container min-h-screen mb-20 mx-auto px-4 py-10 flex flex-col justify-center">
      <Helmet>
        <title> Henri - Contact</title>
      </Helmet>
      <div
        className="grid shadow-lg  mt-10 h-s max-w-5xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200"
        bis_skin_checked="1"
      >
        <div className="flex  flex-col justify-between" bis_skin_checked="1">
          <div className="space-y-2" bis_skin_checked="1">
            <h2 className="text-4xl    font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="opacity-70" bis_skin_checked="1">
              <p className="text-sm">We'd love to hear from you.</p>
              <p className="text-sm">
                Feel free to reach out with any questions or feedback.
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://i.ibb.co/gbFSWZyF/3a200799969305dc428128b320ace7a5-removebg-preview.png"
            alt=""
            className="p-6 "
          />
        </div>
        <form onSubmit={handleSubmit} noValidate="" className="space-y-6   ">
          <div bis_skin_checked="1">
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter full your name"
              className="w-full p-3 rounded bg-base-300"
              required
            />
          </div>
          <div bis_skin_checked="1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-base-300"
              required
            />
          </div>
          <div bis_skin_checked="1">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Write your message here..."
              className="w-full p-3 rounded bg-base-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded text-white bg-[#297059e5] duration-300 cursor-pointer hover:bg-[#2A6F57] "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
