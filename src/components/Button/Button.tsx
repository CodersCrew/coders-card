import React from 'react';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';

export type ButtonProps = MuiButtonProps;

export const Button = (props: ButtonProps) => {
  return <MuiButton {...props} />;
};
