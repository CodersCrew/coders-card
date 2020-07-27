import React, { FC } from 'react';
import { BoxProps } from './type';
import { Box as MuiBox, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.paper,
  },

  label: {
    padding: theme.spacing(0.5, 1.25),
    backgroundColor: theme.palette.primary.main,
    borderRadius: `0px 5px 5px 0px `,
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

  description: {
    color: theme.palette.text.secondary,
  },
}));

const ResumeListMobile: FC<BoxProps> = ({ labelText, headerText, title, description }) => {
  const classes = useStyles();
  return (
    <MuiBox className={classes.box}>
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
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      </div>
    </MuiBox>
  );
};

export default ResumeListMobile;
