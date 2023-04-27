import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderContainer(props: React.PropsWithChildren) {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[70vh] mt-8 shadow-2xl rounded-[20px]">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}
