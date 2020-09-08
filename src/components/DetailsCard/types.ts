export type DeveloperProfileGQL = {
  last_name: string;
  is_freelancer: boolean;
  first_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  avatar: {
    publicURL: string;
  };
  social_media: {
    facebook: string;
    github: string;
    instagram: string;
    twitter: string;
  };
  position: string;
  cv: string;
};
