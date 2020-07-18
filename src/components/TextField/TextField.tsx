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
    '& .label.Mui-focused': {
      fontSize: '12px',
      color: theme.palette.text.secondary,
    },
    '& .MuiFilledInput-root': {
      borderRadius: '8px',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.field,
    },
  },
}));

export const TextField = ({ ...props }: TextFieldProps) => {
  const classes = useStyles();
  return <MuiTextField className={classes.TextField} {...props} />;
};
