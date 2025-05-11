'use client';

import React from 'react';
import Lottie from 'lottie-react';

export default function LottiePlayer({ animationData, ...props }) {
  return <Lottie animationData={animationData} {...props} />;
}
