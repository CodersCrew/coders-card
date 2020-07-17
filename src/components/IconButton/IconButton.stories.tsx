import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton, IconButtonProps } from '.';
import { Close } from '@material-ui/icons';

export default {
  title: 'IconButton',
  component: IconButton,
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<IconButtonProps> = {
  color: 'primary',
  //variant: 'contained',
  onClick: action('onClick'),
};

export const ButtonWithIcon = () => {
  return (
    <IconButton {...basePropsData}>
      <Close />
    </IconButton>
  );
};
