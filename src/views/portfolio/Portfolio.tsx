import React, { useState } from 'react';
import { Box } from '@material-ui/core';

import { FilterTabs, FilterTabsProps } from '@/components/FilterTabs';
import { PortfolioCard } from '@/components/PortfolioCard';
import { PortfolioProjectDialog } from '@/components/PortfolioProjectDialog';
import { SectionTitle } from '@/components/SectionTitle';
import { portfolio } from '@/data/portfolio';
import { useComponentType } from '@/hooks/useComponentType';
import { Project } from '@/typings';
import { formatDate } from '@/utils/date';

import { usePortfolioStyles } from './Portfolio.styles';
import { getTabsData } from './Portfolio.utils';

export const Portfolio = () => {
  const classes = usePortfolioStyles();
  const { componentType, isMobile } = useComponentType();
  const [selectedProject, setSelectedProject] = useState(-1);
  const [navbarNumberTitle, setNavbarNumberTitle] = useState(0);

  const sortedGroupsOfProjects = getTabsData(portfolio.projects);
  const projectsLabels: string[] = [...sortedGroupsOfProjects.map((object) => object.projectLabel)];
  const getNavbarTitle = (type: number) => projectsLabels[type];
  const tabLabelTitle = getNavbarTitle(navbarNumberTitle);

  const projectsFilteredByLabel = sortedGroupsOfProjects
    .filter(({ projectLabel }) => projectLabel === tabLabelTitle)
    .map(({ projectProperties }) => projectProperties)
    .flat(1);

  const handleChange: FilterTabsProps['onChange'] = (_event, newValue) => {
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
    <Box display="flex" key={project.name}>
      <PortfolioCard
        className={classes.project}
        type={componentType}
        title={project.name}
        label={project.label}
        description={project.previewNote}
        image={project.previewImage}
        onClick={() => setSelectedProject(index)}
      />
      <PortfolioProjectDialog
        type={componentType}
        handleClose={() => handleCloseProject()}
        handlePrev={() => handlePreviousProject(index)}
        handleNext={() => handleNextProject(index)}
        isOpen={index === selectedProject}
        title={project.name}
        tags={project.technologies.map((technology) => ({ name: technology.name }))}
        imageUrl={project.previewImage}
        subtitle={`${formatDate(project.startDate, 'day')} - ${formatDate(project.finishDate, 'day', true)}`}
        contentMainDescription={project.description}
        contentMainRole={project.role}
        contentHeader={project.previewNote}
        tagTitle={project.label}
        buttons={project.buttons}
      />
    </Box>
  );

  return (
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
  );
};
