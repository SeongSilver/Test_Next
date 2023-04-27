import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextJS13() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[65vh]">
      <Slider {...settings}>
        <div className="slider text-2xl">업데이트 내용</div>
        <div className="slider">출처</div>
      </Slider>
    </div>
  );
}

export default NextJS13;
