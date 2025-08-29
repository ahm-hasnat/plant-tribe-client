import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://imgur.com/fD869A0.png",
    heading: "Connect, Cultivate, and Grow",
    text: "Join events, share tips, and discover local green spaces.",
  },
  {
    image: "https://imgur.com/VlT9kzl.png",
    heading: "Find Inspiration in Every Leaf",
    text: "Explore vibrant gardens and learn from experienced growers.",
  },
  {
    image: "https://imgur.com/t7nlTJt.jpg",
    heading: "Your Green Journey Starts Here",
    text: "Share your plant stories and inspire others to grow.",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[90vh] w-full overflow-hidden mt-16">
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex flex-col
               justify-center items-center text-center px-4 z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white
                 drop-shadow-lg">
                  <Typewriter
                    words={[slide.heading]}
                    loop={false}
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={4000}
                  />
                </h1>
                <p className="mt-6 text-lg md:text-xl text-[#ffffffd8] 
                drop-shadow-md">
                  {slide.text}
                </p>
                <button
                  onClick={() => navigate("/errorpage")}
                  className="mt-10 px-6 py-3 bg-[#204e51] hover:bg-[#f26b5e]
                   text-white font-semibold rounded shadow-md transition duration-300"
                >
                  Join the Community
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
