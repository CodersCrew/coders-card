import React from 'react';
import { makeStyles, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core';
import clsx from 'clsx';

export type TextFieldProps = MuiTextFieldProps;

const useStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiFormLabel-root': {
      fontSize: theme.typography.body1.fontSize,
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
    '& .MuiFilledInput-underline:before': { borderBottom: 'none' },
    '& .MuiFilledInput-underline:after': { borderBottom: 'none' },
  },
}));

export const TextField = ({ variant = 'filled', ...props }: TextFieldProps) => {
  const classes = useStyles();

  return <MuiTextField {...props} variant={variant} className={clsx(classes.textField, props.className)} />;
};
