import React from 'react';
import SliderContainer from '../common/SliderContainer';
import NextIntro from './NextIntro';
import NextIntro2 from './NextIntro2';
import NextCategory from './NextCategory';

function NextJS() {
  return (
    <SliderContainer>
      <div className="slider text-2xl">
        <NextIntro />
      </div>
      <div>
        <NextIntro2 />
      </div>
      <div className="slider">
        <NextCategory />
      </div>
      <div className="slider">44</div>
    </SliderContainer>
  );
}

export default NextJS;
