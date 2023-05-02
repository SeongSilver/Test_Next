import React from 'react';
import SliderContainer from '../common/SliderContainer';
import NextIntro from './NextIntro/NextIntro';
import NextIntro2 from './NextIntro/NextIntro2';
import Nust from './NextIntro/Nust';
import NextCategory from './NextIntro/NextCategory';
function NextJS() {
  return (
    <SliderContainer>
      <div className="slider">
        <NextIntro />
      </div>
      <div>
        <NextIntro2 />
      </div>
      <div className="slider">
        <Nust />
      </div>
      <div className="slider">
        <NextCategory />
      </div>
    </SliderContainer>
  );
}

export default NextJS;
