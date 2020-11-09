import React from 'react';
import { Box } from '@material-ui/core';

import image from '../../images/MarleneWatson.png';
import { TestimonialsSection, TestimonialsSectionProps } from '.';

export default {
  title: 'TestimonialsSection',
  component: TestimonialsSection,
  excludeStories: /.*Data$/,
};

const basePropsData: TestimonialsSectionProps = {
  testimonials: [
    {
      testimonialImage: { publicURL: image },
      testimonialText:
        'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
      testimonialName: 'Marlene Watson',
      testimonialJob: 'CEO of Donec',
    },
    {
      testimonialImage: { publicURL: image },
      testimonialText:
        'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
      testimonialName: 'Marlene Watson',
      testimonialJob: 'CEO of Donec',
    },
  ],
};

export const Default = () => {
  return (
    <Box style={{ width: '100%', height: 188 }}>
      <TestimonialsSection {...basePropsData} />
    </Box>
  );
};
