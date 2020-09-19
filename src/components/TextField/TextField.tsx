import React from 'react';
import { makeStyles, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core';
import clsx from 'clsx';
import { Field } from 'formik';
import { TextField as FTextField } from 'formik-material-ui';

import { CFC } from '../../typings/components';

export type TextFieldProps = MuiTextFieldProps;

export type FormikTextFieldProps = MuiTextFieldProps & {
  name: string;
};

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

export const TextField: CFC<TextFieldProps> = (props) => {
  const classes = useStyles();

  return <MuiTextField {...props} className={clsx(classes.textField, props.className)} />;
};

export const FormikTextField: CFC<FormikTextFieldProps> = (props) => {
  const classes = useStyles();

  return <Field component={FTextField} className={clsx(classes.textField, props.className)} {...props} />;
};
