import { ProjectGQL } from './types';
import { SocialMediaName } from '../../components/DetailsCard/cardProps';

export const mapProjectQueryToProjectComponentData = (data: ProjectGQL) => {
  const projectPageData = data.portfolioPage.frontmatter;
  const developerProfile = data.developerProfile.frontmatter;

  return {
    pageTitle: projectPageData.portfolio_page_title,
    projects: projectPageData.projects.map((project) => ({
      image: project.project_preview_image.publicURL,
      title: project.project_name,
      previewNote: project.project_preview_note,
      description: project.project_description,
      label: project.project_label,
      startDate: project.project_start_date,
      finishDate: project.project_finish_date,
      role: project.project_role,
      technologies: project.project_technologies.map((technology) => ({ name: technology.technology_name })),
      mockupsUrl: project.project_mockups,
      codeUrl: project.project_code,
      projectUrl: project.project_app,
    })),
    developerProfile: {
      fullName: `${developerProfile.first_name} ${developerProfile.last_name}`,
      address: `${developerProfile.city}, ${developerProfile.country}`,
      image: developerProfile.avatar.publicURL,
      position: developerProfile.position,
      socialMedia: [
        { name: 'facebook' as SocialMediaName, link: developerProfile.social_media.facebook },
        { name: 'github' as SocialMediaName, link: developerProfile.social_media.github },
        { name: 'twitter' as SocialMediaName, link: developerProfile.social_media.twitter },
        { name: 'instagram' as SocialMediaName, link: developerProfile.social_media.instagram },
      ],
      phone: developerProfile.phone,
      email: developerProfile.email,
      isFreelancer: developerProfile.is_freelancer,
      resumeLink: developerProfile.cv,
    },
  };
};
