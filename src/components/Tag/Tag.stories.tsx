import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Tag',
  component: Tag,
};

export const DefaultTag = () => {
  return <Tag label="Tag" />;
};

export const SuccessTag = () => {
  return <Tag label="Tag" color="secondary" />;
};
