import React from 'react';
import { action } from '@storybook/addon-actions';

import image from '@/images/background.jpg';

import { PortfolioProjectDialog } from './PortfolioProjectDialog';

export default {
  title: 'PortfolioProjectDialog',
  component: PortfolioProjectDialog,
};

const basePropsData = {
  projectUrl: 'https://github.com/CodersCrew/CodersCard',
  codeUrl: 'https://github.com/CodersCrew/CodersCard',
  mockupsUrl: 'https://github.com/CodersCrew/CodersCard',
  title: 'My Awesome Project',
  subtitle: 'March 2020 - current',
  tagtitle: 'Mobile app',
  contentHeader:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  imgurl: image,
  contentMainDescription:
    'Nullam vel eros non arcu feugiat lobortis. Quisque a ultrices neque. Maecenas a ultrices sapien, sit amet aliquam est. Nunc porttitor lorem purus, non venenatis magna suscipit a. Nullam pellentesque, lacus a accumsan pretium, justo massa commodo nulla, ut vulputate elit justo eget neque. Donec aliquet dui quis nisi mattis, nec ultricies nulla elementum. Aenean in nisl eget metus elementum aliquam.',
  contentMainRole:
    'Sed eu enim auctor, auctor ipsum id, finibus metus. Donec vel efficitur mi. Donec at justo nunc. Nullam vitae urna ut leo vehicula sodales. Vestibulum ut dui laoreet, consequat mi a, aliquam quam. Vivamus ac felis non lectus dapibus pulvinar. Nulla imperdiet maximus mi vel lacinia. Sed sagittis velit sed arcu hendrerit sollicitudin. Quisque faucibus bibendum egestas.',
  tags: [{ name: 'Redux' }, { name: 'React' }, { name: 'TypeScript' }],
  handleClose: action('handleClose'),
  handleNext: action('handleNext'),
  handlePrev: action('handlePrev'),
};

export const Desktop = () => {
  return <PortfolioProjectDialog type="desktop" isOpen {...basePropsData} />;
};

export const Tablet = () => {
  return <PortfolioProjectDialog type="tablet" isOpen {...basePropsData} />;
};

export const Mobile = () => {
  return <PortfolioProjectDialog type="mobile" isOpen {...basePropsData} />;
};
