import React from 'react';

import { NavbarComponent } from './Navbar';

export default {
  title: 'Navbar',
  component: NavbarComponent,
};

const navbarBasePropsData = {
  fullName: 'Jonathan Harwood',
  position: 'Full stack developer',
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
  resumeLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  withoutBlogPage: false,
};

export const Desktop = () => {
  return <NavbarComponent {...navbarBasePropsData} type="desktop" />;
};

export const Tablet = () => {
  return <NavbarComponent {...navbarBasePropsData} type="tablet" />;
};

export const Mobile = () => {
  return <NavbarComponent {...navbarBasePropsData} type="mobile" />;
};
