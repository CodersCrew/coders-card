// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { CardProps } from '../../components/DetailsCard/cardProps';
import avatar from '../../images/avatar.jpg';
import project from '../../images/download.jpeg';

export const projectData = {
  image: project,
  title: 'My Awesome Project',
  description:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  label: 'Mobile app',
  onClick: action('project clicked'),
};

export const userData: CardProps = {
  fullName: 'Jonathan Harwood',
  image: avatar,
  position: 'Full stack developer',
  socialMedia: [
    { name: 'facebook', link: 'https://www.facebook.com/' },
    { name: 'github', link: 'https://github.com/' },
    { name: 'twitter', link: 'https://twitter.com/' },
    { name: 'instagram', link: 'https://www.instagram.com/' },
  ],
  phone: '+48 601 345 132',
  email: 'jonathan.harwood@gmail.com',
  address: 'Wroclaw, Poland',
  isFreelancer: true,
  resumeLink: 'https://www.docdroid.net/WyjIuyO/fake-resume-pdf',
};
