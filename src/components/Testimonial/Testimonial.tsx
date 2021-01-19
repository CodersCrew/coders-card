import React from 'react';

import type { TestimonialProps } from './Testimonial.types';
import { TestimonialDefault } from './TestimonialDefault';
import { TestimonialMobile } from './TestimonialMobile';

export const Testimonial = ({ isMobile, ...props }: TestimonialProps) => {
  return isMobile ? <TestimonialMobile {...props} /> : <TestimonialDefault {...props} />;
};
