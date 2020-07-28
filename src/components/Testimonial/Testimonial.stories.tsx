import React from 'react';
import { Box } from '@material-ui/core';

import { Testimonial, TestimonialProps } from '.';

import image from '../../images/MarleneWatson.png';

export default {
  title: 'Testimonial',
  component: Testimonial,
  excludeStories: /.*Data$/,
};

const basePropsData: TestimonialProps = {
  image: image,
  description:
    'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
  labelBold: 'Marlene Watson,',
  label: 'CEO of Donec',
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
      <Testimonial isMobile={true} {...basePropsData} />
    </Box>
  );
};
