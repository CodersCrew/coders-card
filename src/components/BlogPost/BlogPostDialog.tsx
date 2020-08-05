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
};

type BlogPostDialogType = 'mobile' | 'tablet' | 'desktop';

export type DetailsBlogPostDialogType = {
  type: BlogPostDialogType;
};
export const BlogPostDialog: FC<BlogPostDialogProps & DetailsBlogPostDialogType> = ({ isOpen, type, ...props }) => {
  if (type === 'mobile') return <BlogPostDialogMobile isOpen={isOpen} {...props} />;
  else if (type === 'desktop') return <BlogPostDialogDesktop isOpen={isOpen} {...props} />;
  else return <BlogPostDialogTablet isOpen={isOpen} {...props} />;
};
