import { ProjectGQL } from './types';

export const mapProjectQueryToProjectComponentData = (data: ProjectGQL) => {
  const projectPageData = data.markdownRemark.frontmatter;
  // TODO UPDATE
  // Update for missing values when project dialog component is finished
  return {
    pageTitle: projectPageData.portfolio_page_title,
    projects: projectPageData.projects.map((project) => ({
      image: project.project_preview_image.relativePath,
      title: project.project_name,
      description: project.project_preview_note,
      label: project.project_label,
      onClick: () => {
        window.alert('project clicked');
      },
    })),
  };
};
