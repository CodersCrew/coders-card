import { attributes } from '../../content/developer.md';

type Developer = {
  firstName: string;
  lastName: string;
  avatar: string;
  position: string;
  phone?: string;
  email: string;
  city: string;
  country: string;
  isFreelancer: boolean;
  cv?: string;
  socialMedia: {
    facebook?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
};

export const developer: Developer = attributes;
