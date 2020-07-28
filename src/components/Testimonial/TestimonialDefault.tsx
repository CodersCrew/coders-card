import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

import { TestimonialProps } from '.';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
  },
  media: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  description: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(3),
    fontFamily: 'Inter-Italic',
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
  labelBold: {
    display: 'flex',
  },
}));

type Props = TestimonialProps;

const TestimonialDefault: FC<Props> = ({ label, labelBold, description, image, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <Typography className={classes.description} variant="body2">
        {description}
      </Typography>
      <CardMedia className={classes.media} image={image}></CardMedia>
      <Typography className={classes.labelBold} variant="h6">
        {labelBold}
      </Typography>
      <Typography className={classes.label} variant="subtitle2">
        {label}
      </Typography>
    </Card>
  );
};

export default TestimonialDefault;
