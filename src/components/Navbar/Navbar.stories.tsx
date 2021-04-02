import React from 'react';

import { Navbar } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const navbarBasePropsData = {
  fullName: 'Jonathan Harwood',
  position: 'Full stack developer',
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
  resumeLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
};

export const Desktop = () => {
  return <Navbar {...navbarBasePropsData} type="desktop" />;
};

export const Tablet = () => {
  return <Navbar {...navbarBasePropsData} type="tablet" />;
};

export const Mobile = () => {
  return <Navbar {...navbarBasePropsData} type="mobile" />;
};
