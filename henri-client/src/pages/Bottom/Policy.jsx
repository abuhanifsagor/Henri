import React from "react";
import { Helmet } from "react-helmet";

const Policy = () => {
  return (
    <div>
      <div className="max-w-4xl min-h-screen mx-auto px-6 py-10 ">
        <Helmet>
          <title> Henri - Privacy & Policy </title>
        </Helmet>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="opacity-70">
            Your privacy is important to us. At <b>Henri Restaurant</b>, we are
            committed to protecting the personal information you share with us.
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            restaurant services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong className="border-b border-acent border-dashed">
                Personal Data:
              </strong>{" "}
              When you register, place an order, or interact with our platform,
              we may collect personal information such as your name, email
              address, profile picture, and order history.
            </li>
            <li>
              <strong className="border-b border-acent border-dashed">
                Usage Data:
              </strong>{" "}
              We automatically collect information on how you use our website,
              including your device type, IP address, browser, and pages
              visited.
            </li>
            <li>
              <strong className="border-b border-acent border-dashed">
                Cookies:
              </strong>{" "}
              We use cookies and similar technologies to improve your browsing
              experience, understand preferences, and provide personalized
              recommendations.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p className="opacity-70">We may use your information to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Manage your food orders and account;</li>
            <li>
              Improve and personalize our restaurant services and digital
              experience;
            </li>
            <li>Send confirmations, order updates, and promotional offers;</li>
            <li>Monitor platform performance and enhance customer service;</li>
            <li>Ensure food order security and prevent fraud;</li>
            <li>Comply with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
          <p className="opacity-70">
            We retain your personal data for as long as necessary to fulfill
            food service operations and legal requirements. After this period,
            your data is securely deleted or anonymized.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p className="opacity-70">You have the right to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access the personal data we have about you;</li>
            <li>Request corrections or updates to your information;</li>
            <li>Request removal of your data from our system;</li>
            <li>Limit or object to how we process your data;</li>
            <li>Withdraw your consent at any time for non-essential uses.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Policy;
