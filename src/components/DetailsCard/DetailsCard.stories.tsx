import React from 'react';
import { Box } from '@material-ui/core';

import { DetailsCard } from '.';
import { CardProps } from './cardProps';

import image from '../../images/download.jpeg';

export default {
  title: 'DetailsCard',
  component: DetailsCard,
  excludeStories: /.*Data$/,
};

const basePropsData: CardProps = {
  fullName: { firstName: 'Jonathan', lastName: 'Harwood' },
  image,
  position: 'Full stack developer',
  socialMedia: [{ name: 'facebook', link: 'link to facebook' }],
  phone: 123,
  email: 'elo@gmail.com',
  location: { city: 'Wroclaw', country: 'Poland' },
  isFreelancer: true,
  resumeLink: 'linkto resume',
};

export const Desktop = () => {
  return (
    <Box style={{ width: 280, height: 556 }}>
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
