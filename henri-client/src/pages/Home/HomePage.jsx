import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/FAQ/Faq";
import Testimonial from "../../components/testimonial/Testimonial";
import { Helmet } from "react-helmet";
import Workflow from "../../components/workflow/Workflow";
import TopFoods from "../../components/TopFoods/TopFoods";

const HomePage = () => {
  const tasks = useLoaderData();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title> Henri - Home </title>
      </Helmet>
      <Banner></Banner>
      <div className=" relative mb-96">
        <Workflow></Workflow>
      </div>
      <div className="hidden lg:block">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="hidden lg:hidden md:block">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className=" md:hidden lg:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <TopFoods tasks={tasks} />
      <Faq></Faq>

      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
