import React, { ReactElement } from 'react';
import { Facebook, GitHub, Instagram, Twitter } from 'react-feather';

import type { SocialMediaName } from './DetailsCard.types';

const socialMediaIcons = {
  facebook: Facebook,
  github: GitHub,
  twitter: Twitter,
  instagram: Instagram,
};

export const renderSocialMediaIcon = (socialMediaName: SocialMediaName, className: string): ReactElement => {
  const Icon = socialMediaIcons[socialMediaName];

  return <Icon className={className} />;
};
