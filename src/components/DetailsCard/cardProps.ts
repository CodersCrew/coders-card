export type SocialMediaNames = 'facebook' | 'twitter' | 'instagram' | 'github';

type SocialMedia = { name: SocialMediaNames; link: string }[];

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
