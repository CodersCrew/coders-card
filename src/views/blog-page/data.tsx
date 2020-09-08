import { CardProps } from '../../components/DetailsCard/cardProps';
import avatar from '../../images/avatar.jpg';
import image from '../../images/blogpost-image.jpg';

export const blogData = {
  title: 'Ut vitae elit vitae metus convallis consectetur ut et ligula',
  text:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  tagName: 'Teamwork',
  date: '20 April 2020',
  image,
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
