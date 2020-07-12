import React from 'react';
import { Box } from '@material-ui/core';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from '../src/utils/theme';

const withGlobal = (story) => (
  <ThemeProvider>
    <Box p={4}>{story()}</Box>
  </ThemeProvider>
);

addDecorator(withA11y);
addDecorator(withGlobal);
