import React from 'react';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: 'TextField',
  excludeStories: /.*Data$/,
};

const basePropsData: Partial<TextFieldProps> = {
  label: 'Label',
  width: '400px',
  height: '56px',
  variant: 'filled',
};

export const FullField = () => {
  return <TextField InputProps={{ disableUnderline: true }} {...basePropsData} />;
};
