import React from 'react';
import { FC } from '../../typings/components';

import TestimonialMobile from './TestimonialMobile';
import TestimonialDefault from './TestimonialDefault';

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
  return isMobile == true ? <TestimonialMobile {...props} /> : <TestimonialDefault {...props} />;
};
