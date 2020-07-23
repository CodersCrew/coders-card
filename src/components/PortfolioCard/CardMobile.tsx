import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PhoneIphone } from '@material-ui/icons';

import { CardProps } from './cardProps';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 272,
    height: 331,
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  media: {
    height: 152,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
    padding: theme.spacing(0.5, 1.5),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = CardProps;

const CardMobile: FC<Props> = ({ title, label, description, image, onClick }) => {
  const classes = useStyles();

  return (
    <Card onClick={onClick} className={classes.card}>
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.media} image={image} title={title}>
          <Typography className={classes.label} variant="subtitle2">
            <PhoneIphone fontSize="small" className={classes.icon} />
            <span>{label}</span>
          </Typography>
        </CardMedia>
        <CardContent>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardMobile;
