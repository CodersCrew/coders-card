import React from 'react';
import { Smile } from 'react-feather';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const basePropsData: Partial<ButtonProps> = {
  color: 'primary',
  variant: 'contained',
  onClick: action('onClick'),
};

export const TextOnly = () => {
  return <Button {...basePropsData}>Text Only</Button>;
};

export const WithIcon = () => {
  return (
    <Button {...basePropsData} startIcon={<Smile size={16} />}>
      With Icon
    </Button>
  );
};
export const TextOnlySmall = () => {
  return (
    <Button {...basePropsData} size="small">
      Text Only
    </Button>
  );
};

export const WithIconSmall = () => {
  return (
    <Button {...basePropsData} size="small" startIcon={<Smile size={16} />}>
      With Icon
    </Button>
  );
};
