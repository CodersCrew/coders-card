import React from 'react';

import { FC } from '../../typings/components';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import { CardProps } from './cardProps';
import CardTablet from './CardTablet';

type CardType = 'mobile' | 'tablet' | 'desktop';

type DetailsCardProps = CardProps & {
  type: CardType;
};

export const DetailsCard: FC<DetailsCardProps> = ({ type, ...props }) => {
  if (type === 'desktop') return <CardDesktop {...props} />;
  if (type === 'tablet') return <CardTablet {...props} />;
  return <CardMobile {...props} />;
};
