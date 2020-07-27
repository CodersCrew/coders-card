import React, { FC } from 'react';
import { Box as MuiBox, makeStyles, Paper, Typography } from '@material-ui/core';
import { BoxProps } from './type';

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
    borderRadius: `5px 5px`,
    color: theme.palette.background.paper,
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(0, 0, 0.5, 0),
  },

  header: {
    color: theme.palette.text.primary,
  },

  title: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(0, 0, 1, 0),
  },

  description: {
    color: theme.palette.text.secondary,
  },
}));

const ResumeListDefault: FC<BoxProps> = ({ labelText, headerText, title, description }) => {
  const classes = useStyles();
  return (
    <MuiBox className={classes.box}>
      <div className={classes.wrapper}>
        <Typography className={classes.header} variant="h5">
          {headerText}
        </Typography>
        <Paper className={classes.label} component="span">
          {labelText}
        </Paper>
      </div>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {description}
      </Typography>
    </MuiBox>
  );
};

export default ResumeListDefault;
