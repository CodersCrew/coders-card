import React from 'react';

import { FC } from '../../typings/components';
import { ScreenSize } from '../../typings/customization';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import { CardProps } from './cardProps';
import CardTablet from './CardTablet';

type DetailsCardProps = CardProps & {
  type: ScreenSize;
};

export const DetailsCard: FC<DetailsCardProps> = ({ type, ...props }) => {
  if (type === 'desktop') return <CardDesktop {...props} />;
  if (type === 'tablet') return <CardTablet {...props} />;
  return <CardMobile {...props} />;
};
