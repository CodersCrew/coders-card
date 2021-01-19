import React from 'react';

import { useDeveloperProfile } from '@/hooks/useDeveloperProfile';

import type { DetailsCardProps, DetailsCardVariantProps } from './DetailsCard.types';
import { DetailsCardDesktop } from './DetailsCardDesktop';
import { DetailsCardMobile } from './DetailsCardMobile';
import { DetailsCardTablet } from './DetailsCardTablet';

export const DetailsCard = ({ type }: DetailsCardProps) => {
  const developerProfile = useDeveloperProfile();

  const props: DetailsCardVariantProps = {
    fullName: `${developerProfile.firstName} ${developerProfile.lastName}`,
    address: `${developerProfile.city}, ${developerProfile.country}`,
    image: `${developerProfile.avatar.publicURL}`,
    position: `${developerProfile.position}`,
    socialMedia: [
      { name: 'facebook', link: developerProfile.socialMedia.facebook || '' },
      { name: 'github', link: developerProfile.socialMedia.github || '' },
      { name: 'twitter', link: developerProfile.socialMedia.twitter || '' },
      { name: 'instagram', link: developerProfile.socialMedia.instagram || '' },
    ],
    phone: `${developerProfile.phone}`,
    email: `${developerProfile.email}`,
    isFreelancer: `${developerProfile.isFreelancer}`,
    resumeLink: `${developerProfile.cv}`,
  };

  if (type === 'desktop') return <DetailsCardDesktop {...props} />;
  if (type === 'tablet') return <DetailsCardTablet {...props} />;
  return <DetailsCardMobile {...props} />;
};
