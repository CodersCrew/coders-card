import React from 'react';
import { Box, BoxProps, makeStyles } from '@material-ui/core';

export type SectionTitleProps = BoxProps;

const useStyles = makeStyles((theme) => ({
  SectionTitle: {
    fontSize: '24px',
    color: theme.palette.text.primary,
  },
  divider: {
    height: '2px',
    marginTop: '10px',
    background: `linear-gradient(left, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 64px, ${theme.palette.divider} 64px, ${theme.palette.divider} 100%)`,
  },
}));

export const SectionTitle = (props: SectionTitleProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.SectionTitle} {...props} >
      {props.children}
      <div className={classes.divider} />
    </Box>
  )
}