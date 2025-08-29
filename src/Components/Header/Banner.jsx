import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router';


const Banner = () => {
  const navigate = useNavigate();
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden mt-16">
     
      <div className="swiper h-full w-full">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide bg-cover bg-center h-full w-full bg-no-repeat 
            bg-[url('https://imgur.com/fD869A0.png')]"
          ></div>
          <div
            className="swiper-slide bg-cover bg-center h-full w-full md:bg-top 
            bg-no-repeat
            bg-[url('https://imgur.com/VlT9kzl.png')]" 
          ></div>
          <div
            className="swiper-slide bg-cover bg-center h-full w-full bg-no-repeat
            bg-[url('https://imgur.com/t7nlTJt.jpg')]" 
          ></div>
        </div>

        <div className="swiper-pagination"></div>
        {/* <div className="swiper-button-prev text-white"></div>
        <div className="swiper-button-next text-white"></div> */}
      </div>

      
      <div className="absolute inset-0  flex flex-col justify-center items-center 
      text-center px-4 z-10 bg-black/30">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg 
        space-y-5">
          Connect,  Cultivate  and Grow with <br />Gardeners Near You
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#ffffffd8] drop-shadow-md">
          Join events, share tips, and discover local green spaces.
        </p>
        <button  onClick={() => navigate('/errorpage')}  className="mt-10 px-6 py-3 bg-[#204e51] hover:bg-[#f26b5e] text-white font-semibold rounded shadow-md transition duration-300">
          Join the Community
        </button>
      </div>
    </div>
  );
};

export default Banner;

