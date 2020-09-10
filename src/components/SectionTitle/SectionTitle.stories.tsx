import React from 'react';

import { SectionTitle } from '.';

export default {
  title: 'SectionTitle',
  component: SectionTitle,
  excludeStories: /.*Data$/,
};

export const SectionTitleExample = () => {
  return <SectionTitle>About me</SectionTitle>;
};
