import React, { useState } from 'react';
import { Smartphone } from 'react-feather';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { transformImage } from '@/utils/image';

import type { PortfolioCardVariantProps } from './PortfolioCard.types';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 8,
    boxShadow: theme.shadows[4],
  },
  action: {
    position: 'relative',
    width: '100%',
    height: '100%',
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
    height: 75,
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

export const PortfolioCardDesktop = ({
  title,
  label,
  description,
  image,
  onClick,
  className = '',
  ...props
}: PortfolioCardVariantProps) => {
  const classes = useStyles();
  const [isHovered, setHovered] = useState(false);

  const projectImage = transformImage(image, { width: 400, height: 224 });

  return (
    <Card
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${classes.card} ${className}`}
      {...props}
    >
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.media} image={projectImage} title={title} />
        <CardContent style={{ opacity: isHovered ? 0.9 : 0 }} className={classes.overlay}>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Typography className={classes.label} variant="subtitle2">
            <span>{label}</span> <Smartphone className={classes.icon} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
