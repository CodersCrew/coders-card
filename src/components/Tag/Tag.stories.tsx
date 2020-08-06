import React from 'react';
import { action } from '@storybook/addon-actions';
import { Tag, TagProps } from '.';

export default {
  title: 'Tag',
  component: Tag,
  excludeStories: /.*Data$/,
};

export const DefaultTag = () => {
  return <Tag label="Tag" />;
}