import React from 'react';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: 'TextField',
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<TextFieldProps> = {
  label: 'Label',
  variant: 'filled',
};

export const BaseInput = () => {
  return <TextField InputProps={{ disableUnderline: true }} {...basePropsData} />;
};

export const AreaInput = () => {
  return <TextField InputProps={{ disableUnderline: true, multiline: true }} {...basePropsData} />;
};
