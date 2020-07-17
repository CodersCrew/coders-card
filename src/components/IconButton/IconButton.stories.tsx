import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from '.';
//import { IconButton } from '@material-ui/core';

export default {
  title: 'IconButton',
  component: Button,
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<ButtonProps> = {
  color: 'primary',
  variant: 'contained',
  onClick: action('onClick'),
};

export const IconButton = () => {
  return <IconButton {...basePropsData}></IconButton>;
};
