import React from 'react';
import { action } from '@storybook/addon-actions';
import { BlogPost } from '.';
import image from '../../images/blogpost-image.jpg';

export default {
  title: 'BlogPost',
  component: BlogPost,
  excludeStories: /.*Data$/,
};

const basePropsData = {
  color: 'primary',
  variant: 'contained',
  onClick: action('onClick'),
};

export const WithLongTitle = () => {
  return (
    <BlogPost
      title="Ut vitae elit vitae metus convallis consectetur ut et ligula"
      text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica"
      tagName="Teamwork"
      date="20 April 2020"
      image={image}
    />
  );
};

export const WitShortTitle = () => {
  return (
    <BlogPost
      title="Ut vitae elit"
      text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica"
      tagName="Clean code"
      date="20 April 2020"
      image={image}
    />
  );
};
