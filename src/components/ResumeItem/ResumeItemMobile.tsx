import React from 'react';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';

import type { ResumeItemVariantProps } from './ResumeItem.types';

const useStyles = makeStyles((theme) => ({
  label: {
    padding: theme.spacing(0.5, 1.25),
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 5 5 0 ',
    color: theme.palette.background.paper,
  },
  wrapper: {
    padding: theme.spacing(1.5, 0, 0.75, 1.75),
    borderLeft: `2px solid ${theme.palette.primary.main}`,
  },
  header: {
    color: theme.palette.text.primary,
    margin: theme.spacing(0.5, 0, 0.75, 0),
  },
  title: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(0, 0, 0.75, 0),
  },
}));

export const ResumeItemMobile = ({ labelText, headerText, title, description, ...props }: ResumeItemVariantProps) => {
  const classes = useStyles();

  return (
    <Box {...props} bgcolor="background.paper">
      <Paper className={classes.label} component="span">
        {labelText}
      </Paper>
      <div className={classes.wrapper}>
        <Typography className={classes.header} variant="h5">
          {headerText}
        </Typography>
        <Typography className={classes.title} variant="h6">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {description}
        </Typography>
      </div>
    </Box>
  );
};
