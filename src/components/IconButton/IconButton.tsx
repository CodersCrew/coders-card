import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@material-ui/core';

export type IconButtonProps = MuiIconButtonProps;

export const IconButton = (props: IconButtonProps) => {
  return <MuiIconButton {...props} />;
};
