import React, { ReactElement } from 'react';
import { GitHub, Facebook, Twitter, Instagram } from 'react-feather';

export const renderSocialMediaIcon = (socialMediaName: string, className: string): ReactElement => {
  if (socialMediaName === 'facebook') return <Facebook className={className} />;
  if (socialMediaName === 'github') return <GitHub className={className} />;
  if (socialMediaName === 'twitter') return <Twitter className={className} />;
  return <Instagram className={className} />;
};
