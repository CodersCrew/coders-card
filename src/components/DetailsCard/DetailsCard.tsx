import React from 'react';

import { developer } from '@/data/developer';

import type { DetailsCardProps, DetailsCardVariantProps } from './DetailsCard.types';
import { DetailsCardDesktop } from './DetailsCardDesktop';
import { DetailsCardMobile } from './DetailsCardMobile';
import { DetailsCardTablet } from './DetailsCardTablet';

export const DetailsCard = ({ type }: DetailsCardProps) => {
  const props: DetailsCardVariantProps = {
    fullName: `${developer.firstName} ${developer.lastName}`,
    address: `${developer.city}, ${developer.country}`,
    image: developer.avatar,
    position: developer.position,
    socialMedia: [
      { name: 'facebook', link: developer.socialMedia.facebook ?? '' },
      { name: 'github', link: developer.socialMedia.github ?? '' },
      { name: 'twitter', link: developer.socialMedia.twitter ?? '' },
      { name: 'instagram', link: developer.socialMedia.instagram ?? '' },
    ],
    phone: developer.phone,
    email: developer.email,
    isFreelancer: developer.isFreelancer,
    resumeLink: developer.cv,
  };

  if (type === 'desktop') return <DetailsCardDesktop {...props} />;
  if (type === 'tablet') return <DetailsCardTablet {...props} />;

  return <DetailsCardMobile {...props} />;
};
