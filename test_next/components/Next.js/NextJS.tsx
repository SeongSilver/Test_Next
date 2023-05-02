import React from 'react';
import SliderContainer from '../common/SliderContainer';
import NextIntro from './NextIntro';
import NextIntro2 from './NextIntro2';
import VueNust from './VueNust';
import NextCategory from './NextCategory';
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
        <VueNust />
      </div>
      <div className="slider">
        <NextCategory />
      </div>
    </SliderContainer>
  );
}

export default NextJS;
