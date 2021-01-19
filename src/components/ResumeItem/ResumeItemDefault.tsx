import React from 'react';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';

import type { ResumeItemVariantProps } from './ResumeItem.types';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0.75, 0, 1, 2.25),
  },
  label: {
    padding: theme.spacing(0.5, 1.25),
    backgroundColor: theme.palette.text.secondary,
    borderRadius: 5,
    color: theme.palette.background.paper,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(0, 0, 0.5, 0),
  },
  title: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(0, 0, 1, 0),
  },
}));

export const ResumeItemDefault = ({ labelText, headerText, title, description, ...props }: ResumeItemVariantProps) => {
  const classes = useStyles();

  return (
    <Box {...props} className={classes.box}>
      <div className={classes.wrapper}>
        <Typography color="textPrimary" variant="h5">
          {headerText}
        </Typography>
        <Paper className={classes.label} component="span">
          {labelText}
        </Paper>
      </div>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {description}
      </Typography>
    </Box>
  );
};
