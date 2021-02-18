import React from 'react';
import { BoxProps } from '@material-ui/core';

import { ScreenSize } from '@/typings';
import { useBlogQuery } from '@/views/blog/Blog.query';

import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';
import { NavbarTablet } from './NavbarTablet';

export type NavbarProps = BoxProps & {
  type: ScreenSize;
  fullName: string;
  image: string;
  position: string;
  resumeLink?: string;
};

export const NavbarComponent = ({
  withoutBlogPage,
  type,
  fullName,
  image,
  position,
  resumeLink,
  ...props
}: NavbarProps & { withoutBlogPage: boolean }) => {
  const mobileProps = { fullName, image, position };
  const tabletProps = { fullName, image, position, resumeLink };

  if (type === 'mobile') return <NavbarMobile {...mobileProps} {...props} withoutBlogPage={withoutBlogPage} />;
  if (type === 'tablet') return <NavbarTablet {...tabletProps} {...props} withoutBlogPage={withoutBlogPage} />;

  return <NavbarDesktop {...props} withoutBlogPage={withoutBlogPage} />;
};

export const Navbar = (props: NavbarProps) => {
  const blogData = useBlogQuery();
  const withoutBlogPage = !blogData.blogPost?.length;

  return <NavbarComponent {...props} withoutBlogPage={withoutBlogPage} />;
};
