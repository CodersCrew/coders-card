import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import BlogPage from '../../pages/blog-page';

export default {
  title: 'blog-page',
  component: BlogPage,
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
};

export const MobileBlogPage = () => {
  return <BlogPage />;
};

MobileBlogPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const TabletBlogPage = () => {
  return <BlogPage />;
};

TabletBlogPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const DesktopBlogPage = () => {
  return <BlogPage />;
};
