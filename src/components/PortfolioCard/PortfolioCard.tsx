import React from 'react';
import { FC } from '../../typings/components';

import CardMobile from './CardMobile';
import CardTablet from './CardTablet';
import CardDesktop from './CardDesktop';

import { CardProps } from './cardProps';

type CardType = 'mobile' | 'tablet' | 'desktop';

interface PortfolioCardProps extends CardProps {
  type: CardType;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ type, description, label, image, title }) => {
  const cardProps: CardProps = { description, label, image, title };
  console.log(cardProps);
  if (type === 'desktop') return <CardDesktop {...cardProps} />;
  else if (type === 'tablet') return <CardTablet {...cardProps} />;
  else return <CardMobile {...cardProps} />;
};
