import React from 'react';
import withFormik from 'storybook-formik';

import { TextField, TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: 'TextField',
  excludeStories: /.*Data$/,
  decorators: [withFormik],
};
const basePropsData: Partial<TextFieldProps> = {
  label: 'Label',
  variant: 'filled',
  name: 'name',
};

export const BaseInput = (): JSX.Element => {
  return <TextField {...basePropsData} />;
};
export const AreaInput = (): JSX.Element => {
  return <TextField multiline {...basePropsData} />;
};
