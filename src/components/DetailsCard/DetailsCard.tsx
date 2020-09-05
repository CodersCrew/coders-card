import React from 'react';
import { FC } from '../../typings/components';
import { graphql, useStaticQuery } from 'gatsby';
import { dataResumePage } from './utils';

import CardMobile from './CardMobile';
import CardTablet from './CardTablet';
import CardDesktop from './CardDesktop';

import { CardProps } from './cardProps';

type CardType = 'mobile' | 'tablet' | 'desktop';

type DetailsCardProps = {
  type: CardType;
};

export const DetailsCard: FC<DetailsCardProps & CardProps> = ({ type }) => {
  const data = useStaticQuery(graphql`
    {
      developerProfile: markdownRemark(fileAbsolutePath: { regex: "/developer-profile/index-1.md/" }) {
        frontmatter {
          firstName
          lastName
          isFreelancer
          email
          country
          city
          phone
          avatar {
            publicURL
          }
          socialMedia {
            facebook
            github
            instagram
            twitter
          }
          position
          cv
        }
      }
    }
  `);

  const { developerProfile } = dataResumePage(data);
  console.log(data);
  if (type === 'desktop') return <CardDesktop {...developerProfile} />;
  if (type === 'tablet') return <CardTablet {...developerProfile} />;
  return <CardMobile {...developerProfile} />;
};
