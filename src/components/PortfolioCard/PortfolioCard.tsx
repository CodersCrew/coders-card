import React from 'react';

import type { PortfolioCardProps } from './PortfolioCard.types';
import { PortfolioCardDesktop } from './PortfolioCardDesktop';
import { PortfolioCardMobile } from './PortfolioCardMobile';
import { PortfolioCardTablet } from './PortfolioCardTablet';

export const PortfolioCard = ({ type, ...props }: PortfolioCardProps) => {
  if (type === 'desktop') return <PortfolioCardDesktop {...props} />;
  if (type === 'tablet') return <PortfolioCardTablet {...props} />;
  return <PortfolioCardMobile {...props} />;
};
