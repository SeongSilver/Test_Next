import React from 'react';
import SliderContainer from '../common/SliderContainer';
import NextPreRendering1 from './PreRendering/PreRendering1';
import NextPreRendering2 from './PreRendering/PreRendering2';
import NextPreRendering3 from './PreRendering/PreRendering3';
import NextPreRendering4 from './PreRendering/PreRendering4';
import NextDynamicRoutes from './Routes/NextDynamicRoutes1';
import NextDynamicRoutes2 from './Routes/NextDynamicRoutes2';
import NextLink from './Link/NextLink';
import NextLink2 from './Link/NextLink2';
import NextCodeSpliting from './NextCodeSpliting';
import NextTSTailwind from './NextTSTailwind';
import NextVercel from './NextVercel';

function NextFunction() {
  return (
    <SliderContainer>
      <div className="slider">
        <NextPreRendering1 />
      </div>
      <div className="slider">
        <NextPreRendering2 />
      </div>
      <div className="slider">
        <NextPreRendering3 />
      </div>
      <div className="slider">
        <NextPreRendering4 />
      </div>
      <div className="slider">
        <NextDynamicRoutes />
      </div>
      <div className="slider">
        <NextDynamicRoutes2 />
      </div>
      <div className="slider">
        <NextLink />
      </div>
      <div className="slider">
        <NextLink2 />
      </div>
      <div className="slider">
        <NextCodeSpliting />
      </div>
      <div className="slider">
        <NextTSTailwind />
      </div>
      <div className="slider">
        <NextVercel />
      </div>
    </SliderContainer>
  );
}

export default NextFunction;
