import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";

const ReviewSlider = () => {
  return (
    <>
      <div className="grid py-5 mb-8 grid-cols-3 items-center md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <h1 className="text-2xl md:text-4xl font-bold">
            What People Say About <b className="text-[#e44848fb]">Henri</b>
          </h1>
        </div>
        <div className="col-span-2 rounded-md md:col-span-1">
          <Swiper
            grabCursor={true}
            autoplay={{ delay: 2000 }}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card className="mt-6 text-white rounded-lg bg-[#d35b5b] w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" 
                    alt="Customer"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                    Regular Customer
                  </Typography>
                  <Typography className="opacity-70">
                    Henri serves the best pasta I’ve ever had! The ambiance and service are top-notch.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex hover:text-white items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="mt-6 text-white rounded-lg bg-[#d35b5b] w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://cdn.pixabay.com/photo/2022/03/27/00/55/black-woman-7093911_960_720.jpg" 
                    alt="Foodie"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                    Food Enthusiast
                  </Typography>
                  <Typography className="opacity-70">
                    Every visit feels like a celebration. The desserts here are heavenly!
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="mt-6 text-white rounded-lg bg-[#d35b5b] w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://i.ibb.co/TBXNkYhX/image.png" 
                    alt="Chef"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                    Head Chef
                  </Typography>
                  <Typography>
                    At Henri, we cook with love and serve with pride. Our guests always leave happy.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="mt-6 text-white rounded-lg bg-[#d35b5b] w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://i.ibb.co/3mCZjGhd/image.png" 
                    alt="Reviewer"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                    Online Reviewer
                  </Typography>
                  <Typography className="opacity-70">
                    One of the most consistent dining experiences in town. Highly recommended!
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;