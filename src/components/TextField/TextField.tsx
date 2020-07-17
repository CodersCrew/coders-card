/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, makeStyles, Theme } from '@material-ui/core';

export type TextFieldProps = MuiTextFieldProps;

const useStyles = makeStyles((theme) => ({
  TextField: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiFormLabel-root': {
      fontSize: '16px',
      color: theme.palette.text.primary,
    },
    '& label.Mui-focused': {
      fontSize: '12px',
      color: theme.palette.text.secondary,
    },
    '& .MuiInputBase-input': {
      borderRadius: '8px',
      backgroundColor: theme.palette.background.field,
    },
    '& .MuiFilledInput-root': {
      width: '400px',
      height: '56px',
      borderRadius: '8px',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

export const TextField = (props: TextFieldProps) => {
  const classes = useStyles();
  return <MuiTextField className={classes.TextField} {...props} />;
};
