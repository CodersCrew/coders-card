import { CardProps, SocialMediaName } from './cardProps';

export const dataResumePage = (data: CardProps) => {
  const developerProfile = data.developerProfile.frontmatter;
  return {
    developerProfile: {
      fullName: `${developerProfile.firstName} ${developerProfile.lastName}`,
      address: `${developerProfile.city}, ${developerProfile.country}`,
      image: developerProfile.avatar.publicURL,
      position: developerProfile.position,
      socialMedia: [
        { name: 'facebook' as SocialMediaName, link: developerProfile.socialMedia.facebook },
        { name: 'github' as SocialMediaName, link: developerProfile.socialMedia.github },
        { name: 'twitter' as SocialMediaName, link: developerProfile.socialMedia.twitter },
        { name: 'instagram' as SocialMediaName, link: developerProfile.socialMedia.instagram },
      ],
      phone: developerProfile.phone,
      email: developerProfile.email,
      isFreelancer: developerProfile.isFreelancer,
      resumeLink: developerProfile.cv,
    },
  };
};
