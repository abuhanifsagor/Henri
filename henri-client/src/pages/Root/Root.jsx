import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Loading from "../../components/Loading/Loading";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../../components/ScrollToTop";

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (navigation.state === "loading") {
      setShowLoader(true);
      timeout = setTimeout(() => {
        if (navigation.state !== "loading") {
          setShowLoader(false);
        }
      }, 1000);
    } else {
      timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [navigation.state]);

  return (
    <div>
      <ScrollToTop />
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>
      {showLoader && <Loading />}
      <div className="min-h-screen mt-15">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
