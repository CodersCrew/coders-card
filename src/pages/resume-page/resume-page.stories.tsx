import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ResumePage from '.';

export default {
  title: 'resume-page',
  component: ResumePage,
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
};

export const MobileResumePage = () => {
  return <ResumePage />;
};

MobileResumePage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const TabletResumePage = () => {
  return <ResumePage />;
};

TabletResumePage.story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const DesktopResumePage = () => {
  return <ResumePage />;
};
