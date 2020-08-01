import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { TestimonialProps } from '.';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    boxShadow: 'none',
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
    filter: 'blur(10px)',
    opacity: 0.4,
    padding: 0,
    borderRadius: 8,
  },
  overlayBox: {
    padding: 0,
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
    height: 156,
    transform: 'translateY(-40px)',
  },
  description: {
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

type Props = TestimonialProps;

const TestimonialMobile: FC<Props> = ({ label, labelBold, description, image, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlay}>
        <CardMedia className={classes.media} image={image}>
          <CardMedia className={classes.overlayMedia} image={image}></CardMedia>
        </CardMedia>
      </CardContent>
      <CardContent className={classes.overlayBox}>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
        <CardContent className={classes.labelOverlay}>
          <Typography color={'textPrimary'} variant="h6">
            {labelBold + ','}
          </Typography>
          <Typography className={classes.label} variant="body2">
            {label}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default TestimonialMobile;
