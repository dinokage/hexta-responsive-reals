'use client'; 

import React from 'react';
import Lottie from 'lottie-react';
import animationData from './marketing.json'; // Path to your Lottie JSON file

const LottieAnimation = () => {
  return (
    <div className="w-1/2 mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;