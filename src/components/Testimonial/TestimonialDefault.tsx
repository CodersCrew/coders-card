import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

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
    height: 48,
  },
  overlayMedia: {
    width: 64,
    height: 64,
    filter: 'blur(24px)',
    opacity: 0.4,
    padding: 0,
  },
  overlayDescription: {
    display: 'flex',
    width: 396,
    height: 140,
    borderRadius: 8,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
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
  },
  description: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(3),
  },
  label: {
    color: theme.palette.text.secondary,
  },
  labelBold: {
    color: theme.palette.text.primary,
  },
}));

type Props = TestimonialProps;

const TestimonialDefault: FC<Props> = ({ label, labelBold, description, image, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlayDescription}>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardContent className={classes.overlay}>
        <CardMedia className={classes.media} image={image}>
          <CardContent className={classes.overlayMedia}>
            <CardMedia className={classes.media} image={image}></CardMedia>
          </CardContent>
        </CardMedia>
        <CardContent className={classes.overlayLabel}>
          <Typography className={classes.labelBold} variant="h6">
            {labelBold}
          </Typography>
          <Typography className={classes.label} variant="subtitle2">
            {label}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default TestimonialDefault;
