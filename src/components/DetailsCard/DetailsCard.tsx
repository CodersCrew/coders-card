import React from 'react';

import { DeveloperProfileGQL, useDeveloperProfile } from '../../containers/DeveloperProfile';
import { FC } from '../../typings/components';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import CardTablet from './CardTablet';

type CardType = 'mobile' | 'tablet' | 'desktop';

type DetailsCardProps = DeveloperProfileGQL & {
  type: CardType;
};

export const DetailsCard: FC<DetailsCardProps> = ({ type }) => {
  const developerProfile = useDeveloperProfile();

  const data = {
    fullName: `${developerProfile.firstName} ${developerProfile.lastName}`,
    address: `${developerProfile.city}, ${developerProfile.country}`,
    image: developerProfile.avatar.publicURL,
    position: developerProfile.position,
    socialMedia: [
      { name: 'facebook', link: developerProfile.socialMedia.facebook },
      { name: 'github', link: developerProfile.socialMedia.github },
      { name: 'twitter', link: developerProfile.socialMedia.twitter },
      { name: 'instagram', link: developerProfile.socialMedia.instagram },
    ],
    phone: developerProfile.phone,
    email: developerProfile.email,
    isFreelancer: developerProfile.isFreelancer,
    resumeLink: developerProfile.cv,
  };

  if (type === 'desktop') return <CardDesktop {...data} />;
  if (type === 'tablet') return <CardTablet {...data} />;
  return <CardMobile {...data} />;
};
