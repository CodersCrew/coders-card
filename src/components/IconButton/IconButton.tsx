import React from 'react';
import { IconButton, ButtonProps as MuiIconButtonProps } from '@material-ui/core';

export type ButtonProps = MuiIconButtonProps;

export const Button = (props: ButtonProps) => {
  return <IconButton {...props} />;
};
