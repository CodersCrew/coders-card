import React from 'react';
import { BoxProps } from '@material-ui/core';

import { useBlogPageDoesNotExist } from '../../hooks/useBlogPageDoesNotExist';
import { CFC } from '../../typings/components';
import { ScreenSize } from '../../typings/customization';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';
import { TabletNavbar } from './TabletNavbar';

type NavbarBaseProps = BoxProps & {
  type: ScreenSize;
  fullName: string;
  image: string;
  position: string;
  resumeLink?: string;
};

export type NavbarProps = NavbarBaseProps & { withoutBlogPage?: boolean };

export const NavbarComponent: CFC<NavbarProps> = ({
  withoutBlogPage,
  type,
  fullName,
  image,
  position,
  resumeLink,
  ...props
}) => {
  const mobileProps = { fullName, image, position };
  const tabletProps = { fullName, image, position, resumeLink };

  if (type === 'mobile') return <MobileNavbar {...mobileProps} {...props} withoutBlogPage={withoutBlogPage} />;
  if (type === 'tablet') return <TabletNavbar {...tabletProps} {...props} withoutBlogPage={withoutBlogPage} />;

  return <DesktopNavbar {...props} withoutBlogPage={withoutBlogPage} />;
};

export const Navbar: CFC<NavbarBaseProps> = (props) => {
  const blogPageDoesntExist = useBlogPageDoesNotExist();

  return <NavbarComponent {...props} withoutBlogPage={blogPageDoesntExist} />;
};
