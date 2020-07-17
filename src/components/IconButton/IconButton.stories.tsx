import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton, IconButtonProps } from '.';
import { Close, NavigateNext, NavigateBefore } from '@material-ui/icons';

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

export const MediumNextButton = () => {
  return (
    <IconButton {...basePropsData}>
      <NavigateNext />
    </IconButton>
  );
};

export const SmallNextButton = () => {
  return (
    <IconButton {...basePropsData} size={'small'}>
      <NavigateNext />
    </IconButton>
  );
};

export const MediumBackButton = () => {
  return (
    <IconButton {...basePropsData}>
      <NavigateBefore />
    </IconButton>
  );
};

export const SmallBackButton = () => {
  return (
    <IconButton {...basePropsData} size={'small'}>
      <NavigateBefore />
    </IconButton>
  );
};
