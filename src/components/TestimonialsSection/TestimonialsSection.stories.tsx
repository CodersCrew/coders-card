import React from 'react';
import { Box } from '@material-ui/core';

import { TestimonialsSection, TestimonialsSectionProps } from './TestimonialsSection';

export default {
  title: 'TestimonialsSection',
  component: TestimonialsSection,
};

const basePropsData: TestimonialsSectionProps = {
  testimonials: [
    {
      testimonialImage: { publicURL: 'https://i.pravatar.cc/300' },
      testimonialText:
        'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
      testimonialName: 'Marlene Watson',
      testimonialJob: 'CEO of Donec',
    },
    {
      testimonialImage: { publicURL: 'https://i.pravatar.cc/300' },
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
