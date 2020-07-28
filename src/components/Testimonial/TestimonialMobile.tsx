import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { TestimonialProps } from '.';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //justifyContent: 'space-between',
    //width: 64,
    width: '100%',
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
    color: theme.palette.text.primary,
    fontFamily: 'Inter-Regular',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // margin: theme.spacing(1),
    // marginTop: theme.spacing(7),
    // borderRadius: 8,
  },
  labelBold: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontFamily: 'Inter-Bold',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // margin: theme.spacing(1),
    // marginTop: theme.spacing(7),
    // borderRadius: 8,
  },
}));

type Props = TestimonialProps;

const TestimonialMobile: FC<Props> = ({ label, labelBold, description, image, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardMedia className={classes.media} image={image}></CardMedia>
      <Typography className={classes.description} variant="body2">
        {description}
      </Typography>
      <Typography className={classes.labelBold} variant="h6">
        {labelBold}
      </Typography>
      <Typography className={classes.label} variant="body2">
        {label}
      </Typography>
    </Card>
  );
};

export default TestimonialMobile;
