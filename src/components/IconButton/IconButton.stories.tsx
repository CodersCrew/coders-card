import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'react-feather';
import { action } from '@storybook/addon-actions';

import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
};

const basePropsData: Partial<IconButtonProps> = {
  onClick: action('onClick'),
};

export const MediumCloseButton = () => {
  return (
    <IconButton color="inherit" {...basePropsData}>
      <X size={20} />
    </IconButton>
  );
};

export const SmallCloseButton = () => {
  return (
    <IconButton color="inherit" {...basePropsData} size="small">
      <X size={15} />
    </IconButton>
  );
};

export const MediumNextButton = () => {
  return (
    <IconButton color="inherit" {...basePropsData}>
      <ChevronRight size={20} />
    </IconButton>
  );
};

export const SmallNextButton = () => {
  return (
    <IconButton color="inherit" {...basePropsData} size="small">
      <ChevronRight size={15} />
    </IconButton>
  );
};

export const MediumBackButton = () => {
  return (
    <IconButton color="inherit" {...basePropsData}>
      <ChevronLeft size={20} />
    </IconButton>
  );
};

export const SmallBackButton = () => {
  return (
    <IconButton color="inherit" {...basePropsData} size="small">
      <ChevronLeft size={15} />
    </IconButton>
  );
};
