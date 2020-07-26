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
      <CardActionArea>
        <CardMedia image={image} title="Contemplative Reptile" />
        <CardContent>
          <Box>
            {fullName.firstName} {fullName.lastName}
          </Box>
          <Box>{position}</Box>
          {socialMedia.map((media) => (
            <Box key={media.name}>
              {media.name} {media.link}
            </Box>
          ))}
          <Box>{phone}</Box>
          <Box>{email}</Box>
          <Box>
            {location.city}, {location.country}
          </Box>
          <Box>{isFreelancer ? 'i am freelancer' : 'i am not freelancer'}</Box>
          <Box>{resumeLink}</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardTablet;
