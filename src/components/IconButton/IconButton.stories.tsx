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
  onClick: action('onClick'),
};

export const MediumCloseButton = () => {
  return (
    <IconButton {...basePropsData}>
      <Close />
    </IconButton>
  );
};

export const SmallCloseButton = () => {
  return (
    <IconButton {...basePropsData} size={'small'}>
      <Close />
    </IconButton>
  );
};
