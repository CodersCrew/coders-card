import React from 'react';

import { FC } from '../../typings/components';
import TestimonialDefault from './TestimonialDefault';
import TestimonialMobile from './TestimonialMobile';

export type TestimonialProps = {
  image: string;
  label: string;
  labelBold: string;
  description: string;
};

type TestimonialCardProps = TestimonialProps & {
  isMobile: boolean;
};

export const Testimonial: FC<TestimonialCardProps> = ({ isMobile, ...props }) => {
  return isMobile ? <TestimonialMobile {...props} /> : <TestimonialDefault {...props} />;
};
