import React from 'react';
import { action } from '@storybook/addon-actions';
import { Smile } from 'react-feather';
import { Button, ButtonProps } from ".";

export default {
  title: 'Button',
  component: Button,
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<ButtonProps> = {
  color: 'primary',
  variant: 'contained',
  onClick: action('onClick'),
}

export const TextOnly = () => {
  return <Button {...basePropsData}>Text only</Button>
}

export const WithIcon = () => {
  return <Button {...basePropsData} startIcon={<Smile size={16} />}>With icon</Button>
}