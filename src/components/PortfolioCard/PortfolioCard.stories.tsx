import React from 'react';
import { PortfolioCard } from '.';
import astronaut from '../../images/gatsby-astronaut.png';

export default {
  title: 'PortfolioCard',
  component: PortfolioCard,
  excludeStories: /.*Data$/,
};

export const Desktop = () => {
  return <PortfolioCard type="desktop" />;
};

export const Tablet = () => {
  return <PortfolioCard type="tablet" />;
};

export const Mobile = () => {
  return (
    <PortfolioCard
      type="mobile"
      image={astronaut}
      title="My Awesome Project"
      description="In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque."
      label="Label"
    />
  );
};
