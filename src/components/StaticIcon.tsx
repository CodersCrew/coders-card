import React from 'react';
import { ReactSVG } from 'react-svg';
import { makeStyles } from '@material-ui/core';

type StaticIconProps = {
  size: number;
  icon: string;
};

const useStyles = makeStyles({
  icon: ({ size }: Pick<StaticIconProps, 'size'>) => ({
    width: size,
    height: size,

    '& > svg': {
      width: '100%',
      height: '100%',
    },
  }),
});

export const StaticIcon = ({ icon, size }: StaticIconProps) => {
  const classes = useStyles({ size });

  return <ReactSVG className={classes.icon} src={`/icons/${icon}.svg`} width={size} height={size} />;
};
