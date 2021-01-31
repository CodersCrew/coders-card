import React from 'react';

import type { BlogPostDialogProps } from './BlogPostDialog.types';
import { BlogPostDialogDesktop } from './BlogPostDialogDesktop';
import { BlogPostDialogMobile } from './BlogPostDialogMobile';
import { BlogPostDialogTablet } from './BlogPostDialogTablet';

export const BlogPostDialog = ({ type, ...props }: BlogPostDialogProps) => {
  if (type === 'mobile') return <BlogPostDialogMobile {...props} />;
  if (type === 'desktop') return <BlogPostDialogDesktop {...props} />;
  return <BlogPostDialogTablet {...props} />;
};
