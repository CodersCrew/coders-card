import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ContactPage from '.';

export default {
  title: 'contact-page',
  component: ContactPage,
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
};

export const MobileContactPage = () => {
  return <ContactPage />;
};

MobileContactPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const TabletContactPage = () => {
  return <ContactPage />;
};

TabletContactPage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const DesktopContactPage = () => {
  return <ContactPage />;
};
