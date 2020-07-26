import React from 'react';
import { Box } from '@material-ui/core';

import { DetailsCard } from '.';

import { CardProps } from './cardProps';

import image from '../../images/avatar.jpg';

export default {
  title: 'DetailsCard',
  component: DetailsCard,
  excludeStories: /.*Data$/,
};

const basePropsData: CardProps = {
  fullName: { firstName: 'Jonathan', lastName: 'Harwood' },
  image,
  position: 'Full stack developer',
  socialMedia: [
    { name: 'facebook', link: 'https://www.facebook.com/' },
    { name: 'github', link: 'https://github.com/' },
    { name: 'twitter', link: 'https://twitter.com/' },
    { name: 'instagram', link: 'https://www.instagram.com/' },
  ],
  phone: '+48 601 345 132',
  email: 'jonathan.harwood@gmail.com',
  location: { city: 'Wroclaw', country: 'Poland' },
  isFreelancer: true,
  resumeLink: 'https://www.docdroid.net/WyjIuyO/fake-resume-pdf',
};

export const Desktop = () => {
  return (
    <Box style={{ width: 280, height: 668 }}>
      <DetailsCard type="desktop" {...basePropsData} />
    </Box>
  );
};

export const Tablet = () => {
  return (
    <Box style={{ width: 720, height: 288 }}>
      <DetailsCard type="tablet" {...basePropsData} />
    </Box>
  );
};

export const Mobile = () => {
  return (
    <Box style={{ width: 280, height: 488 }}>
      <DetailsCard type="mobile" {...basePropsData} />
    </Box>
  );
};
