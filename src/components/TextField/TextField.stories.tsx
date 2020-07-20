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
export const BaseInput = (): JSX.Element => {
  return <TextField {...basePropsData} />;
};
export const AreaInput = (): JSX.Element => {
  return <TextField multiline={true} {...basePropsData} />;
};
