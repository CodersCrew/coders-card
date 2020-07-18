import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, makeStyles, Theme } from '@material-ui/core';

export type TextFieldProps = MuiTextFieldProps & {
  width?: string;
  height?: string;
};

const useStyles = makeStyles((theme) => ({
  TextField: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiFormLabel-root': {
      fontSize: '16px',
      color: theme.palette.text.secondary,
    },
    '& .label.Mui-focused': {
      fontSize: '12px',
      color: theme.palette.text.primary,
    },
    '& .MuiInputBase-input': {
      borderRadius: '8px',
      backgroundColor: theme.palette.background.field,
    },
    '& .MuiFilledInput-root': {
      borderRadius: '8px',
      color: theme.palette.text.primary,
      width: (props: TextFieldProps) => props.width,
      height: (props: TextFieldProps) => props.height,
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

export const TextField = ({ width, height, ...props }: TextFieldProps) => {
  const classes = useStyles({ width, height });
  return <MuiTextField className={classes.TextField} {...props} />;
};
