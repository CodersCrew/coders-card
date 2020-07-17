import React from 'react';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: 'TextField',
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<TextFieldProps> = {
  variant: 'filled',
  label: 'Label',
};

export const FullField = () => {
  return <TextField InputProps={{ disableUnderline: true }} {...basePropsData} />;
};
