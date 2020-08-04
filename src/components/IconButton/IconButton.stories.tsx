import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton, IconButtonProps } from '.';
import { X, ChevronLeft, ChevronRight } from 'react-feather';

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
      <X size={20} />
    </IconButton>
  );
};

export const SmallCloseButton = () => {
  return (
    <IconButton {...basePropsData} size={'small'}>
      <X size={15} />
    </IconButton>
  );
};

export const MediumNextButton = () => {
  return (
    <IconButton {...basePropsData}>
      <ChevronRight size={20} />
    </IconButton>
  );
};

export const SmallNextButton = () => {
  return (
    <IconButton {...basePropsData} size={'small'}>
      <ChevronRight size={15} />
    </IconButton>
  );
};

export const MediumBackButton = () => {
  return (
    <IconButton {...basePropsData}>
      <ChevronLeft size={20} />
    </IconButton>
  );
};

export const SmallBackButton = () => {
  return (
    <IconButton {...basePropsData} size={'small'}>
      <ChevronLeft size={15} />
    </IconButton>
  );
};
