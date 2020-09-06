import React from 'react';
import { Tag, TagProps } from '.';

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
