import React from 'react';

import './src/styles/global.css';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <TopLayout>{element}</TopLayout>;
};
