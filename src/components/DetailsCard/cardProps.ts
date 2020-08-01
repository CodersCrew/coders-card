export type SocialMediaName = 'facebook' | 'twitter' | 'instagram' | 'github';

type SocialMedia = { name: SocialMediaName; link: string }[];

export type CardProps = {
  fullName: string;
  image: string;
  position: string;
  socialMedia?: SocialMedia;
  phone?: string;
  email?: string;
  location?: string;
  isFreelancer?: boolean;
  resumeLink?: string;
};
