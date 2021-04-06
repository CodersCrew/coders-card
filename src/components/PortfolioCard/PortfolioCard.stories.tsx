import React from 'react';
import { Box } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

import { PortfolioCard } from './PortfolioCard';
import type { PortfolioCardProps } from './PortfolioCard.types';

export default {
  title: 'PortfolioCard',
  component: PortfolioCard,
};

const basePropsData: Omit<PortfolioCardProps, 'type'> = {
  image: 'https://source.unsplash.com/1600x900/daily?landscape',
  title: 'My Awesome Project',
  description:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  label: 'Mobile app',
  onClick: action('onClick'),
};

export const Desktop = () => {
  return (
    <Box style={{ width: 400, height: 224 }}>
      <PortfolioCard type="desktop" {...basePropsData} />
    </Box>
  );
};

export const Tablet = () => {
  return (
    <Box style={{ width: 672, height: 135 }}>
      <PortfolioCard type="tablet" {...basePropsData} />
    </Box>
  );
};

export const Mobile = () => {
  return (
    <Box style={{ width: 272, height: 331 }}>
      <PortfolioCard type="mobile" {...basePropsData} />
    </Box>
  );
};
