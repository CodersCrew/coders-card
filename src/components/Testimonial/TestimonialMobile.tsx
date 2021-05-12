import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { transformImage } from '@/utils/image';

import type { TestimonialVariantProps } from './Testimonial.types';

const AVATAR_SIZE = 64;

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
    height: AVATAR_SIZE,
  },
  media: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: 8,
    zIndex: 2,
  },
  overlayMedia: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    filter: 'blur(10px)',
    opacity: 0.4,
    padding: 0,
    borderRadius: 8,
  },
  overlayBox: {
    padding: 0,
    borderRadius: 8,
    boxShadow: theme.shadows[4],
    minHeight: 156,
    transform: 'translateY(-40px)',
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(1.5),
    textAlign: 'center',
    transform: 'translateY(40px)',
    fontStyle: 'italic',
  },
  labelOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0',
    transform: 'translateY(40px)',
  },
  label: {
    color: theme.palette.text.primary,
    margin: theme.spacing(0.5),
  },
}));

export const TestimonialMobile = ({
  content,
  authorImage,
  authorJob,
  authorName,
  ...props
}: TestimonialVariantProps) => {
  const classes = useStyles();

  const avatar = transformImage(authorImage, { width: AVATAR_SIZE, height: AVATAR_SIZE });

  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlay}>
        <CardMedia className={classes.media} image={avatar}>
          <CardMedia className={classes.overlayMedia} image={avatar} />
        </CardMedia>
      </CardContent>
      <CardContent className={classes.overlayBox}>
        <Typography className={classes.content} variant="body2">
          {content}
        </Typography>
        <CardContent className={classes.labelOverlay}>
          <Typography color="textPrimary" variant="h6">
            {authorName},
          </Typography>
          <Typography className={classes.label} variant="body2">
            {authorJob}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};
