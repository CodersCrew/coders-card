import React from 'react';
import { action } from '@storybook/addon-actions';

import image from '../../images/blogpost-image.jpg';
import { BlogPost } from '.';

export default {
  title: 'BlogPost',
  component: BlogPost,
  excludeStories: /.*Data$/,
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
      onClick={action('onClick')}
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
      onClick={action('onClick')}
    />
  );
};
