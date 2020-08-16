import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 400,
    minWidth: 220,
    borderRadius: 8,
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',

    [theme.breakpoints.up('md')]: {
      maxWidth: 600,
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 400,
    },
  },
}));

const DummyBlogPost: FC<Props> = () => {
    const classes = useStyles();
    return (
      <Box className={classes.card}>
      </Box>
    );
  };
  
export default DummyBlogPost;