import React from 'react';

import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <TopLayout>{element}</TopLayout>;
};
