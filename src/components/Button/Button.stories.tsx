import React from 'react';
import { Smile } from 'react-feather';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<ButtonProps> = {
  color: 'primary',
  variant: 'contained',
  onClick: action('onClick'),
};

export const TextOnly = (): JSX.Element => {
  return <Button {...basePropsData}>Text Only</Button>;
};

export const WithIcon = (): JSX.Element => {
  return (
    <Button {...basePropsData} startIcon={<Smile size={16} />}>
      With Icon
    </Button>
  );
};
export const TextOnlySmall = (): JSX.Element => {
  return (
    <Button {...basePropsData} size="small">
      Text Only
    </Button>
  );
};

export const WithIconSmall = (): JSX.Element => {
  return (
    <Button {...basePropsData} size="small" startIcon={<Smile size={16} />}>
      With Icon
    </Button>
  );
};
