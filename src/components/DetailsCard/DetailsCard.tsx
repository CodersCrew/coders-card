import React from 'react';
import { FC } from '../../typings/components';

import CardMobile from './CardMobile';
import CardTablet from './CardTablet';
import CardDesktop from './CardDesktop';

type CardType = 'mobile' | 'tablet' | 'desktop';

interface DetailsCardProps {
  type: CardType;
}

export const DetailsCard: FC<DetailsCardProps> = ({ type }) => {
  if (type === 'desktop') return <CardDesktop />;
  if (type === 'tablet') return <CardTablet />;
  return <CardMobile />;
};
