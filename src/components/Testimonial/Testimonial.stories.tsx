import React from 'react';
import { Box } from '@material-ui/core';

import { Testimonial } from './Testimonial';
import type { TestimonialVariantProps } from './Testimonial.types';

export default {
  title: 'Testimonial',
  component: Testimonial,
};

const basePropsData: TestimonialVariantProps = {
  authorImage: 'https://i.pravatar.cc/300',
  content:
    'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
  authorName: 'Marlene Watson',
  authorJob: 'CEO of Donec',
};

export const Default = () => {
  return (
    <Box style={{ width: 396, height: 188 }}>
      <Testimonial isMobile={false} {...basePropsData} />
    </Box>
  );
};

export const Mobile = () => {
  return (
    <Box style={{ width: 396, height: 196 }}>
      <Testimonial isMobile {...basePropsData} />
    </Box>
  );
};
