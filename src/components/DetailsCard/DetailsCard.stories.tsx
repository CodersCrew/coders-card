import React from 'react';
import DetailsCard from '.';

export default {
  title: 'DetailsCard',
  component: DetailsCard,
  excludeStories: /.*Data$/,
};

export const CardVariant = () => {
  return <DetailsCard someProp="component text" />;
};
