import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Chip } from '@material-ui/core';

export interface IBlogPost {
  title: string;
  text: string;
  tagName: string;
  date: string;
  image: string;
}

const useStyles = makeStyles(({ spacing, typography }) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 224,
    position: 'relative',
  },
  content: {
    padding: spacing(3),
  },
  title: {
    margin: 0,
  },
  text: {
    paddingTop: spacing(1.5),
  },
  tag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: spacing(0, 1, 0, 0),
  },
  label: {
    fontSize: typography.subtitle2.fontSize,
    lineHeight: typography.subtitle2.lineHeight,
    fontWeight: typography.subtitle2.fontWeight,
  },
  date: {
    position: 'absolute',
    top: spacing(1),
    right: spacing(1),
    opacity: 0.88,
    borderRadius: 4,
  },
}));

export const BlogPost: React.FC<IBlogPost> = ({ title, text, tagName, date, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image}>
          <Chip label={tagName} className={classes.tag} classes={{ label: classes.label }} />
          <Chip label={date} className={classes.date} classes={{ label: classes.label }} />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h4" component="h4" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
