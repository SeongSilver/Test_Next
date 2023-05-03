import React from 'react';
import SliderContainer from '../common/SliderContainer';
import Next13Intro from './Next13/Next13Intro';
import Next13Function from './Next13/Next13Function';
import Next13Function2 from './Next13/Next13Function2';
import Next13Function3 from './Next13/Next13Function3';

function NextJS13() {
  return (
    <SliderContainer>
      <div className="slider">
        <Next13Intro />
      </div>
      <div className="slider">
        <Next13Function />
      </div>
      <div className="slider">
        <Next13Function2 />
      </div>
      <div className="slider">
        <Next13Function3 />
      </div>
    </SliderContainer>
  );
}

export default NextJS13;
