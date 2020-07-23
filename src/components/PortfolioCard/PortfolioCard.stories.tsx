import React from 'react';
import { action } from '@storybook/addon-actions';

import { PortfolioCard } from '.';
import { CardProps } from './cardProps';

import image from '../../images/download.jpeg';

export default {
  title: 'PortfolioCard',
  component: PortfolioCard,
  excludeStories: /.*Data$/,
};

const basePropsData: CardProps = {
  image: image,
  title: 'My Awesome Project',
  description:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  label: 'Mobile app',
  onClick: action('onClick'),
};

export const Desktop = () => {
  return <PortfolioCard type="desktop" {...basePropsData} />;
};

export const Tablet = () => {
  return <PortfolioCard type="tablet" {...basePropsData} />;
};

export const Mobile = () => {
  return <PortfolioCard type="mobile" {...basePropsData} />;
};
