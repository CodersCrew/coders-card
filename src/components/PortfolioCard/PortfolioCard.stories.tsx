import React from 'react';
import { CardType, PortfolioCard } from '.';

export default {
  title: 'PortfolioCard',
  component: PortfolioCard,
  excludeStories: /.*Data$/,
};

export const Desktop = () => {
  return <PortfolioCard type={CardType.DESKTOP} />;
};

export const Tablet = () => {
  return <PortfolioCard type={CardType.TABLET} />;
};

export const Mobile = () => {
  return <PortfolioCard type={CardType.MOBILE} />;
};
