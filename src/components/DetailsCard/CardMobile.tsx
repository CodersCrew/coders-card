import React from 'react';
import { Box, Card, Typography, CardActionArea, CardContent, CardMedia, makeStyles } from '@material-ui/core/';
import { FC } from '../../typings/components';

import { CardProps } from './cardProps';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.background.default,
  },
}));
const CardMobile: FC<CardProps> = ({
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
  const displayName = `${fullName.firstName} ${fullName.lastName}`;

  return (
    <Card className={classes.card}>
      <Typography variant="h1">{displayName}</Typography>

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

export default CardMobile;
