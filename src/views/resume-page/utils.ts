import { ResumePageData } from './types';
import { SocialMediaName } from '../../components/DetailsCard/cardProps';

export const dataResumePage = (data: ResumePageData) => {
  const resumePageData = data.resumePage.frontmatter;
  // const developerProfile = data.developerProfile.frontmatter;
  return {
    title: resumePageData.resumePageTitle,
    workexperience: resumePageData.workExperience.map((work) => ({
      labelText: `${work.startJobDate} -   ${work.finishJobDate}`,
      headerText: work.jobTitle,
      title: work.companyName,
      description: work.jobDescription,
    })),
    education: resumePageData.education.map((item) => ({
      labelText: `${item.startSchoolDate} - ${item.finishSchoolDate}`,
      headerText: item.course,
      title: item.schoolName,
      description: item.educationDescription,
    })),
    // developerProfile: {
    //   fullName: `${developerProfile.firstName} ${developerProfile.lastName}`,
    //   address: `${developerProfile.city}, ${developerProfile.country}`,
    //   image: developerProfile.avatar.publicURL,
    //   position: developerProfile.position,
    //   socialMedia: [
    //     { name: 'facebook' as SocialMediaName, link: developerProfile.socialMedia.facebook },
    //     { name: 'github' as SocialMediaName, link: developerProfile.socialMedia.github },
    //     { name: 'twitter' as SocialMediaName, link: developerProfile.socialMedia.twitter },
    //     { name: 'instagram' as SocialMediaName, link: developerProfile.socialMedia.instagram },
    //   ],
    //   phone: developerProfile.phone,
    //   email: developerProfile.email,
    //   isFreelancer: developerProfile.isFreelancer,
    //   resumeLink: developerProfile.cv,
    // },
  };
};
