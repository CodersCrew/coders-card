import React from 'react';
import { FC } from '../../typings/components';

import CardMobile from './CardMobile';
import CardTablet from './CardTablet';
import CardDesktop from './CardDesktop';

import { CardProps } from './cardProps';

type CardType = 'mobile' | 'tablet' | 'desktop';

interface DetailsCardProps extends CardProps {
  type: CardType;
}

export const DetailsCard: FC<DetailsCardProps> = ({ type, ...props }) => {
  if (type === 'desktop') return <CardDesktop {...props} />;
  if (type === 'tablet') return <CardTablet {...props} />;
  return <CardMobile {...props} />;
};
