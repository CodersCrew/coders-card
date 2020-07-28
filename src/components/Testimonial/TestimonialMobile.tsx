import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { TestimonialProps } from '.';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 64,
  },
  media: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  overlayMedia: {
    width: 64,
    height: 64,
    filter: 'blur(24px)',
    opacity: 0.4,
    padding: 0,
  },
  description: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(1.5),
    textAlign: 'center',
  },
  labelOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0',
  },
  label: {
    color: theme.palette.text.primary,
    margin: theme.spacing(0.5),
  },
  labelBold: {
    color: theme.palette.text.primary,
  },
}));

type Props = TestimonialProps;

const TestimonialMobile: FC<Props> = ({ label, labelBold, description, image, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlay}>
        <CardMedia className={classes.media} image={image}>
          <CardContent className={classes.overlayMedia}>
            <CardMedia className={classes.media} image={image}></CardMedia>
          </CardContent>
        </CardMedia>
      </CardContent>
      <Typography className={classes.description} variant="body2">
        {description}
      </Typography>
      <CardContent className={classes.labelOverlay}>
        <Typography className={classes.labelBold} variant="h6">
          {labelBold}
        </Typography>
        <Typography className={classes.label} variant="body2">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialMobile;
