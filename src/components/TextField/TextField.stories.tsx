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

export const FullField = () => {
  return <TextField InputProps={{ disableUnderline: true }} width={'400px'} height={'56px'} {...basePropsData} />;
};
