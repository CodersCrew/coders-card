import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import AboutPage from '.';

export default {
  title: 'About',
  component: AboutPage,
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
};

export const MobileAboutPage = () => {
  return <AboutPage />;
};

MobileAboutPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const TabletAboutPage = () => {
  return <AboutPage />;
};

TabletAboutPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const DesktopAboutPage = () => {
  return <AboutPage />;
};
