import React from 'react';
import image from '../../images/download.jpeg';

import { PortfolioProjectDialog } from './PortfolioProject';

export default {
  title: 'PortfolioProjectDialog',
  component: PortfolioProjectDialog,
  excludeStories: /.*Data$/,
};

const basePropsData = {
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
};

export const Desktop = (): JSX.Element => {
  return <PortfolioProjectDialog type="desktop" isOpen={true} {...basePropsData} />;
};

export const Tablet = (): JSX.Element => {
  return <PortfolioProjectDialog type="tablet" isOpen={true} {...basePropsData} />;
};

export const Mobile = (): JSX.Element => {
  return <PortfolioProjectDialog type="mobile" isOpen={true} {...basePropsData} />;
};
