import React from 'react';
import { BoxProps } from '@material-ui/core';

import { ScreenSize } from '@/typings';

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

export const Navbar = ({ type, fullName, image, position, resumeLink, ...props }: NavbarProps) => {
  const mobileProps = { fullName, image, position };
  const tabletProps = { fullName, image, position, resumeLink };

  if (type === 'mobile') return <NavbarMobile {...mobileProps} {...props} />;
  if (type === 'tablet') return <NavbarTablet {...tabletProps} {...props} />;

  return <NavbarDesktop {...props} />;
};
