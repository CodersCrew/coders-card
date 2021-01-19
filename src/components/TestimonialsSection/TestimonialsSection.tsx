import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { SectionTitle } from '@/components/SectionTitle';
import { Testimonial } from '@/components/Testimonial';
import { useComponentType } from '@/hooks/useComponentType';

export type TestimonialsSectionProps = {
  testimonials?: {
    testimonialImage: { publicURL: string };
    testimonialName: string;
    testimonialText: string;
    testimonialJob: string;
  }[];
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

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const classes = useStyles();
  const { isMobile } = useComponentType();

  return (
    <>
      {testimonials?.length ? (
        <>
          <SectionTitle className={classes.title}>Testimonials</SectionTitle>
          <Box className={classes.testimonials}>
            {testimonials?.map((testimonial) => (
              <Testimonial
                key={testimonial.testimonialName}
                isMobile={isMobile}
                image={testimonial.testimonialImage.publicURL}
                description={testimonial.testimonialText}
                labelBold={testimonial.testimonialName}
                label={testimonial.testimonialJob}
              />
            ))}
          </Box>
        </>
      ) : null}
    </>
  );
};
