import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

import { TestimonialProps } from '.';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
  },
  media: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    transition: '.5s ease',
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    color: theme.palette.text.white,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.white,
    marginLeft: theme.spacing(1),
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
    marginTop: theme.spacing(7),
    color: theme.palette.text.white,
    borderRadius: 8,
  },
  icon: {
    color: theme.palette.background.paper,
  },
}));

type Props = TestimonialProps;

const TestimonialDefault: FC<Props> = ({ label, description, image, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardMedia className={classes.media} image={image}></CardMedia>
      <CardContent className={classes.overlay}>
        <Typography className={classes.title} variant="h4"></Typography>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
        <Typography className={classes.label} variant="subtitle2">
          <span>{label}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialDefault;
