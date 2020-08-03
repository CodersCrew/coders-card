import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import PortfolioPage from '.';

export default {
  title: 'portfolio-page',
  component: PortfolioPage,
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
};

export const MobilePortfolioPage = () => {
  return <PortfolioPage />;
};

MobilePortfolioPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const TabletPortfolioPage = () => {
  return <PortfolioPage />;
};

TabletPortfolioPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const DesktopPortfolioPage = () => {
  return <PortfolioPage />;
};
