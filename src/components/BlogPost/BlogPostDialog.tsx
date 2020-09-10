import React, { FC } from 'react';

import BlogPostDialogMobile from './BlogPostDialogMobile';
import BlogPostDialogDesktop from './BlogPostDialogDesktop';
import BlogPostDialogTablet from './BlogPostDialogTablet';

export type BlogPostDialogProps = {
  title: string;
  subtitle: string;
  tagtitle: string;
  contentheader: string;
  imgurl: string;
  contentmain: string;
  isOpen: boolean;
  handleClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
};

type BlogPostDialogType = BlogPostDialogProps & { type: 'mobile' | 'tablet' | 'desktop' };

export const BlogPostDialog: FC<BlogPostDialogType> = ({ type, ...props }) => {
  if (type === 'mobile') return <BlogPostDialogMobile {...props} />;
  else if (type === 'desktop') return <BlogPostDialogDesktop {...props} />;
  return <BlogPostDialogTablet {...props} />;
};
