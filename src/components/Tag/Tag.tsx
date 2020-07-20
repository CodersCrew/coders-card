import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps, makeStyles, withTheme } from '@material-ui/core';
export type TagProps = MuiChipProps;

const useStyles = makeStyles((theme) => ({
  MuiChip: {
    backgroundColor: theme.palette.background.tag,
    borderRadius: '4px',
    color: 'white'
  },
}));
export const Tag = (props: TagProps) => {
  const classes = useStyles();
  return <MuiChip className={classes.MuiChip} {...props} />;
}
