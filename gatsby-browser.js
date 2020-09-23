import React from 'react';

import TopLayout from './src/components/TopLayout';

// eslint-disable-next-line react/jsx-filename-extension
export const wrapRootElement = ({ element }) => <TopLayout>{element}</TopLayout>;
