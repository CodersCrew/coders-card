import React from 'react';

import { BlogPostDialog } from './BlogPostDialog';
import { action } from '@storybook/addon-actions';

export default {
  title: 'BlogPostDialog',
  component: BlogPostDialog,
  excludeStories: /.*Data$/,
};

const basePropsData = {
  title: 'What Are the React Team Principles?',
  subtitle: 'March 2020 - current',
  tagtitle: 'Teamwork',
  contentheader:
    'Sed ornare accumsan mauris. Vestibulum tincidunt aliquam turpis, sit amet tempor ante sagittis non. Fusce gravida sapien lobortis imperdiet euismod.',
  imgurl: 'https://picsum.photos/336/500',
  contentmain:
    'Curabitur accumsan nunc sit amet felis cursus, quis mattis justo tristique. Phasellus posuere consequat enim, eget condimentum massa suscipit sit amet. Pellentesque erat diam, malesuada nec lectus nec, pharetra interdum dui. Quisque nec sagittis augue. Quisque rhoncus tellus nec leo eleifend varius. Integer justo odio, accumsan sed rutrum ac, cursus aliquet orci. Phasellus mollis ante metus, id scelerisque mi cursus quis. Sed sed quam molestie, laoreet tortor sit amet, venenatis mi. In tincidunt erat tortor, vel suscipit sem egestas nec. Suspendisse ut lorem hendrerit, dictum mauris in, auctor erat. Pellentesque sit amet magna tortor. Suspendisse eu metus felis.Praesent pulvinar dictum mauris, id maximus lorem tristique interdum. Integer lacinia semper lectus. Duis nec odio purus. Integer quis orci vel est laoreet bibendum malesuada sit amet mi. Morbi sit amet sem nec lectus dapibus semper. Sed elementum tristique lorem id tincidunt. Sed porta dui augue, eget ultrices enim interdum vitae. Nullam porta auctor lorem non maximus. Proin non luctus erat.Ut auctor eleifend purus eu viverra. Mauris facilisis nec velit sed dictum. Cras lobortis, metus eget posuere egestas, ipsum lorem laoreet orci, vitae imperdiet mi est a nulla. Duis eleifend nibh diam, vitae malesuada lectus vulputate in. Vestibulum vitae lorem sed sem fringilla egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In scelerisque tortor nec nulla consectetur, sit amet bibendum elit condimentum. Suspendisse non diam est. Maecenas sed varius arcu, in aliquam libero. Etiam molestie aliquet neque nec feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam posuere augue a nisi lobortis, in rutrum dolor iaculis. Donec in libero ipsum.',
  handleClose: action('handleClose'),
  handleNext: action('handleNext'),
  handlePrev: action('handlePrev'),
};

export const Desktop = (): JSX.Element => {
  return <BlogPostDialog type="desktop" isOpen {...basePropsData} />;
};

export const Tablet = (): JSX.Element => {
  return <BlogPostDialog type="tablet" isOpen {...basePropsData} />;
};

export const Mobile = (): JSX.Element => {
  return <BlogPostDialog type="mobile" isOpen {...basePropsData} />;
};
