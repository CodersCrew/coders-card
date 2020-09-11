import React from 'react';
import { BoxProps } from '@material-ui/core';

import { CFC } from '../../typings/components';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';
import { TabletNavbar } from './TabletNavbar';

export type NavbarProps = BoxProps & {
  type: 'mobile' | 'tablet' | 'desktop';
  fullName: string;
  image: string;
  position: string;
  resumeLink?: string;
};

export const Navbar: CFC<NavbarProps> = ({ type, fullName, image, position, resumeLink, ...props }) => {
  const mobileProps = { fullName, image, position };
  const tabletProps = { fullName, image, position, resumeLink };

  if (type === 'mobile') return <MobileNavbar {...mobileProps} {...props} />;
  if (type === 'tablet') return <TabletNavbar {...tabletProps} {...props} />;

  return <DesktopNavbar {...props} />;
};
