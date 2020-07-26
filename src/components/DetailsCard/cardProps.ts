export type SocialMediaNames = 'facebook' | 'twitter' | 'instagram' | 'github';

type SocialMedia = { name: SocialMediaNames; link: string }[];

type Location = { city: string; country: string };

type FullName = { firstName: string; lastName: string };

export type CardProps = {
  fullName: FullName;
  image: string;
  position: string;
  socialMedia?: SocialMedia;
  phone?: string;
  email?: string;
  location?: Location;
  isFreelancer?: boolean;
  resumeLink?: string;
};
