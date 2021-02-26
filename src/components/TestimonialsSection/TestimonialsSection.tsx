import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { SectionTitle } from '@/components/SectionTitle';
import { Testimonial } from '@/components/Testimonial';
import { useComponentType } from '@/hooks/useComponentType';
import type { Testimonial as TestimonialType } from '@/typings';

export type TestimonialsSectionProps = {
  testimonials: TestimonialType[];
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 0),
    },
  },
  testimonials: {
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const classes = useStyles();
  const { isMobile } = useComponentType();

  return (
    <>
      <SectionTitle className={classes.title}>Testimonials</SectionTitle>
      <Box className={classes.testimonials}>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.content}
            isMobile={isMobile}
            {...testimonial}
            authorImage={testimonial.authorImage}
          />
        ))}
      </Box>
    </>
  );
};
