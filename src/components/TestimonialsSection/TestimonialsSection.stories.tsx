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
      authorImage: 'https://i.pravatar.cc/300',
      content:
        'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
      authorName: 'Marlene Watson',
      authorJob: 'CEO of Donec',
    },
    {
      authorImage: 'https://i.pravatar.cc/300',
      content:
        'Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor.',
      authorName: 'Marlene Watson',
      authorJob: 'CEO of Donec',
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
