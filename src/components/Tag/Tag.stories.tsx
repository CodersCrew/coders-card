import React from 'react';

import { Tag } from '.';

export default {
  title: 'Tag',
  component: Tag,
  excludeStories: /.*Data$/,
};

export const DefaultTag = () => {
  return <Tag label="Tag" />;
};

export const SuccessTag = () => {
  return <Tag label="Tag" color="secondary" />;
};
