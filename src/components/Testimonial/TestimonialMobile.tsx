import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { TestimonialProps } from '.';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
  },
  media: {
    width: '100%',
    minHeight: 152,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  content: {
    height: '100%',
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
    padding: theme.spacing(0.5, 1.5, 0.5, 1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 16,
  },
}));

type Props = TestimonialProps;

const TestimonialMobile: FC<Props> = ({ label, description, image, ...props }) => {
  const classes = useStyles();

  return (
    <Card {...props} className={classes.card}>
      <CardMedia className={classes.media} image={image}>
        <Typography className={classes.label} variant="subtitle2">
          <span>{label}</span>
        </Typography>
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h4"></Typography>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialMobile;
