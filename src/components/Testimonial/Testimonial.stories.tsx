import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '@material-ui/core';

import { Testimonial, TestimonialProps } from '.';

import image from '../../images/download.jpeg';

export default {
  title: 'Testimonial',
  component: Testimonial,
  excludeStories: /.*Data$/,
};

const basePropsData: TestimonialProps = {
  image: image,
  description:
    'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor',
  label: 'Marlene Watson, CEO of Donec',
  onClick: action('onClick'),
};

export const Default = () => {
  return (
    <Box style={{ width: 396, height: 190 }}>
      <Testimonial type="false" {...basePropsData} />
    </Box>
  );
};

export const Mobile = () => {
  return (
    <Box style={{ width: 396, height: 196 }}>
      <Testimonial type="true" {...basePropsData} />
    </Box>
  );
};
