import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import type { TestimonialVariantProps } from './Testimonial.types';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: 0,
    boxShadow: theme.shadows[0],
    backgroundColor: 'transparent',
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 48,
  },
  overlayMedia: {
    width: 64,
    height: 64,
    filter: 'blur(10px)',
    opacity: 0.4,
    padding: 0,
    borderRadius: 8,
  },
  overlayDescription: {
    display: 'flex',
    width: 396,
    height: 140,
    borderRadius: 8,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  overlayLabel: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: 0,
    margin: theme.spacing(1),
  },
  media: {
    width: 64,
    height: 64,
    borderRadius: 8,
    transform: 'translateY(-4px)',
  },
  description: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(3),
    fontStyle: 'italic',
  },
}));

export const TestimonialDefault = ({
  content,
  authorImage,
  authorJob,
  authorName,
  ...props
}: TestimonialVariantProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlayDescription}>
        <Typography className={classes.description} variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardContent className={classes.overlay}>
        <CardMedia className={classes.media} image={authorImage}>
          <CardMedia className={classes.overlayMedia} image={authorImage} />
        </CardMedia>
        <CardContent className={classes.overlayLabel}>
          <Typography color="textPrimary" variant="h6">
            {authorName}
          </Typography>
          <Typography color="textPrimary" variant="subtitle2">
            {authorJob}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};
