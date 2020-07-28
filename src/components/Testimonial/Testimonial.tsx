import React from 'react';
import { FC } from '../../typings/components';

import TestimonialMobile from './TestimonialMobile';
import TestimonialDefault from './TestimonialDefault';

type TestimonialMobile = 'true' | 'false';

export type TestimonialProps = {
  image: string;
  label: string;
  labelBold: string;
  description: string;
};

type TestimonialCardProps = TestimonialProps & {
  type: TestimonialMobile;
};

export const Testimonial: FC<TestimonialCardProps> = ({ type, ...props }) => {
  if (type === 'true') return <TestimonialMobile {...props} />;
  return <TestimonialDefault {...props} />;
};
