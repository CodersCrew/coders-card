import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { FC } from '../../typings/components';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import { SocialMediaName } from './cardProps';
import CardTablet from './CardTablet';

type CardType = 'mobile' | 'tablet' | 'desktop';

type DetailsCardProps = {
  type: CardType;
};

export const DetailsCard: FC<DetailsCardProps> = ({ type }) => {
  const data = useStaticQuery(graphql`
    query DeveloperProfile {
      markdownRemark(fileAbsolutePath: { regex: "/developer-profile/index-1.md/" }) {
        developerProfile: frontmatter {
          last_name
          is_freelancer
          first_name
          email
          country
          city
          social_media {
            facebook
            github
            instagram
            twitter
          }
          avatar {
            relativePath
            absolutePath
            accessTime
            publicURL
          }
          position
          cv
          phone
        }
      }
    }
  `);

  const { developerProfile } = data.markdownRemark;

  const cardProps = {
    fullName: `${developerProfile.first_name} ${developerProfile.last_name}`,
    address: `${developerProfile.city}, ${developerProfile.country}`,
    image: developerProfile.avatar.publicURL,
    position: developerProfile.position,
    socialMedia: [
      { name: 'facebook' as SocialMediaName, link: developerProfile.social_media.facebook },
      { name: 'github' as SocialMediaName, link: developerProfile.social_media.github },
      { name: 'twitter' as SocialMediaName, link: developerProfile.social_media.twitter },
      { name: 'instagram' as SocialMediaName, link: developerProfile.social_media.instagram },
    ],
    phone: developerProfile.phone,
    email: developerProfile.email,
    isFreelancer: developerProfile.is_freelancer,
    resumeLink: developerProfile.cv,
  };

  if (type === 'desktop') return <CardDesktop {...cardProps} />;
  if (type === 'tablet') return <CardTablet {...cardProps} />;
  return <CardMobile {...cardProps} />;
};
