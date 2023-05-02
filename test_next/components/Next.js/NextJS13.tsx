import React from 'react';
import SliderContainer from '../common/SliderContainer';
import Next13Intro from './Next13/Next13Intro';
import Next13Function from './Next13/Next13Function';

function NextJS13() {
  return (
    <SliderContainer>
      <div className="slider">
        <Next13Intro />
      </div>
      <div className="slider">
        <Next13Function />
      </div>
    </SliderContainer>
  );
}

export default NextJS13;
