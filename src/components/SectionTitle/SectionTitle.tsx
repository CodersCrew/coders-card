import React from 'react';
import { Box, BoxProps, Typography, makeStyles } from '@material-ui/core';

export type SectionTitleProps = BoxProps;

const useStyles = makeStyles((theme) => ({
  SectionTitle: {
    color: theme.palette.text.primary,
  },
  divider: {
    height: '2px',
    marginTop: theme.spacing(1.5),
    background: `linear-gradient(left, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 64px, ${theme.palette.divider} 64px, ${theme.palette.divider} 100%)`,
  },
}));

export const SectionTitle = (props: SectionTitleProps) => {
  const classes = useStyles();
  return (
    <Typography variant="h3">
      <Box className={classes.SectionTitle} {...props} >
        {props.children}
        <div className={classes.divider} />
      </Box>
    </Typography>
  )
}