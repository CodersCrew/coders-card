import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, makeStyles } from '@material-ui/core/';
import { FC } from '../../typings/components';

import { CardProps } from './cardProps';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.background.default,
  },
}));
const CardTablet: FC<CardProps> = ({
  fullName,
  image,
  position,
  socialMedia,
  phone,
  email,
  location,
  isFreelancer,
  resumeLink,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {fullName.firstName}
      {fullName.lastName}
      {position}
      {image}
      {socialMedia?.map((media) => media.name)}
      {phone}
      {email}
      {location && location.country}
      {isFreelancer ? 'yes' : 'no'}
      {resumeLink}
    </Card>
  );
};

export default CardTablet;
