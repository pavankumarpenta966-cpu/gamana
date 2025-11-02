import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft  } from "react-icons/md";
function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-3xl bg-forest text-white rounded-full">
        <MdKeyboardArrowRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
      <button onClick={onClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-3xl bg-forest text-white rounded-full">
     <MdKeyboardArrowLeft />
    </button>
  );
}

export default function CustomScroll({children, slidesToShow,dots,arrows, nextArrow, prevArrow, responsive}) {
      var settings = {
    dots: dots ?? false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    speed: 500,    
   autoplay: true,  
      arrows: arrows?? false,
    ...(nextArrow ? { nextArrow: <NextArrow /> } : {}),
    ...(prevArrow ? { prevArrow: <PrevArrow /> } : {}),
     responsive: responsive
  };
  return (
      <Slider {...settings}>
        {children}
      </Slider>
  )
}
