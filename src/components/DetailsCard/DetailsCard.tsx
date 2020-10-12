import React from 'react';

import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { FC } from '../../typings/components';
import { ScreenSize } from '../../typings/customization';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import { CardProps } from './cardProps';
import CardTablet from './CardTablet';

export const DetailsCard: FC<{ type: ScreenSize }> = ({ type }) => {
  const developerProfile = useDeveloperProfile();

  const data: CardProps = {
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

  if (type === 'desktop') return <CardDesktop data={data} />;
  if (type === 'tablet') return <CardTablet data={data} />;
  return <CardMobile data={data} />;
};
