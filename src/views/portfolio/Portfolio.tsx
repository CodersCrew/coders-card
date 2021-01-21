import React, { useState } from 'react';
import { Box } from '@material-ui/core';

import { FilterTabs, FilterTabsProps } from '@/components/FilterTabs';
import { Layout } from '@/components/Layout';
import { PortfolioCard } from '@/components/PortfolioCard';
import { PortfolioProjectDialog } from '@/components/PortfolioProjectDialog';
import { SectionTitle } from '@/components/SectionTitle';
import { useComponentType } from '@/hooks/useComponentType';
import { useDeveloperProfile } from '@/hooks/useDeveloperProfile';
import { formatDate } from '@/utils/date';

import { Project, usePortfolioQuery } from './Portfolio.query';
import { usePortfolioStyles } from './Portfolio.styles';
import { getTabsData } from './Portfolio.utils';

export const Portfolio = () => {
  const classes = usePortfolioStyles();
  const data = usePortfolioQuery();
  const { componentType, isMobile } = useComponentType();
  const developerProfile = useDeveloperProfile();
  const [selectedProject, setSelectedProject] = useState(-1);
  const [navbarNumberTitle, setNavbarNumberTitle] = useState(0);

  const sortedGroupsOfProjects = getTabsData(data.projects);
  const projectsLabels: string[] = [...sortedGroupsOfProjects.map((object) => object.projectLabel)];
  const getNavbarTitle = (type: number) => {
    return projectsLabels[type];
  };
  const tabLabelTitle = getNavbarTitle(navbarNumberTitle);

  const projectsFilteredByLabel = sortedGroupsOfProjects
    .filter((project) => {
      return project.projectLabel === tabLabelTitle;
    })
    .map((project) => project.projectProperties)
    .flat(1);

  const handleChange: FilterTabsProps['onChange'] = (event, newValue) => {
    setNavbarNumberTitle(newValue);
  };

  const previousNavbarTitle = () => {
    setNavbarNumberTitle(navbarNumberTitle === 0 ? projectsLabels.length - 1 : navbarNumberTitle - 1);
    setSelectedProject(
      navbarNumberTitle === 0
        ? sortedGroupsOfProjects[projectsLabels.length - 1].projectProperties.length - 1
        : sortedGroupsOfProjects[navbarNumberTitle - 1].projectProperties.length - 1,
    );
  };

  const nextNavbarTitle = () => {
    setNavbarNumberTitle(navbarNumberTitle === projectsLabels.length - 1 ? 0 : navbarNumberTitle + 1);
    setSelectedProject(0);
  };

  // no project will have index equal to -1 therefore no project will be selected
  const handleCloseProject = () => {
    setSelectedProject(-1);
  };

  const handlePreviousProject = (index: number) => {
    return index === 0 ? previousNavbarTitle() : setSelectedProject(index - 1);
  };

  const handleNextProject = (index: number) => {
    return index < sortedGroupsOfProjects[navbarNumberTitle].projectProperties.length - 1
      ? setSelectedProject(index + 1)
      : nextNavbarTitle();
  };

  const renderProject = (project: Project, index: number) => (
    <Box key={`${project.projectName}-${project.projectDescription}`}>
      <PortfolioCard
        className={classes.project}
        type={componentType}
        title={project.projectName}
        label={project.projectLabel}
        description={project.projectDescription}
        image={project.projectPreviewImage.publicURL}
        onClick={() => setSelectedProject(index)}
      />
      <PortfolioProjectDialog
        type={componentType}
        handleClose={() => handleCloseProject()}
        handlePrev={() => handlePreviousProject(index)}
        handleNext={() => handleNextProject(index)}
        isOpen={index === selectedProject}
        title={project.projectName}
        tags={project.projectTechnologies.map((technology) => ({ name: technology.technologyName }))}
        imgurl={project.projectPreviewImage.publicURL}
        subtitle={`${formatDate(project.projectStartDate, 'day')} - ${formatDate(
          project.projectFinishDate,
          'day',
          true,
        )}`}
        contentMainDescription={project.projectDescription}
        contentMainRole={project.projectRole}
        contentHeader={project.projectPreviewNote}
        tagtitle={project.projectLabel}
        mockupsUrl={project.projectMockups ?? ''}
        projectUrl={project.projectApp ?? ''}
        codeUrl={project.projectCode ?? ''}
      />
    </Box>
  );

  return (
    <Layout
      developerProfile={developerProfile}
      meta={{
        title: data.portfolioPageTitle,
        description: data.portfolioPageDescription,
        imageUrl: data.portfolioPageImage?.publicURL,
      }}
    >
      <Box className={classes.projectsContainer}>
        <Box className={classes.titleBox}>
          <SectionTitle className={classes.title}>My works</SectionTitle>
          {!isMobile && (
            <FilterTabs
              className={classes.navbarTitles}
              indicatorColor="primary"
              textColor="primary"
              handleChange={handleChange}
              navbarTitle={navbarNumberTitle}
              projectLabels={projectsLabels}
            />
          )}
        </Box>
        <Box className={classes.projects}>{projectsFilteredByLabel.map(renderProject)}</Box>
      </Box>
    </Layout>
  );
};
