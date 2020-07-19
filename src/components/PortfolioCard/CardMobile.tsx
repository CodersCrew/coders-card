import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardProps } from './cardProps';

// TODO
// handle onclicks properly

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 272,
    height: 331,
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
  },
  action: {
    height: '100%',
  },
  media: {
    height: 152,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  label: {
    margin: theme.spacing(0.5),
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
          <Box className={classes.label}>{label}</Box>
        </CardMedia>
        <CardContent>
          <Typography className={title} variant="h4">
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
