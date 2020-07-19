import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardProps } from './cardProps';

// TODO
// handle onclicks properly

const useStyles = makeStyles((theme) => ({
  card: {
    width: 672,
    height: 135,
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  media: {
    width: 240,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    objectFit: 'cover',
  },
  content: {
    width: 432,
    padding: theme.spacing(2.5, 3),
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  label: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.5, 2),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
  },
}));

type Props = CardProps;

const CardMobile: FC<Props> = ({ title, label, description, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.media} image={image} title={title}>
          <Typography className={classes.label} variant="subtitle2">
            {label}
          </Typography>
        </CardMedia>
        <CardContent className={classes.content}>
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
