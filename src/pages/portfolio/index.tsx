import React, { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { graphql } from 'gatsby';

import { FilterTabs, TabsProps } from '../../components/FilterTabs/FilterTabs';
import { Layout } from '../../components/Layout';
import { PortfolioCard } from '../../components/PortfolioCard';
import { PortfolioProjectDialog } from '../../components/PortfolioProject';
import { SectionTitle } from '../../components/SectionTitle';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { FC } from '../../typings/components';
import { formatDate } from '../../utils/date';
import { ProjectGQL, ProjectType } from '../../views/portfolio-page/types';
import { getTabsData } from './utils';

const useStyles = makeStyles((theme) => ({
  titleBox: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
    },
  },
  projectsContainer: {
    borderRadius: 16,
    padding: theme.spacing(3),

    [theme.breakpoints.up('lg')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
  },
  projects: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      gridRowGap: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '400px 400px',
      alignItems: 'center',
      justifyContent: 'center',
      gridGap: theme.spacing(5),
    },
  },
  project: {
    [theme.breakpoints.up('lg')]: {
      width: 400,
      height: 224,
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    width: '100%',
    zIndex: 1,

    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      margin: theme.spacing(0, 2, 4, 2),
    },
  },
  navbarTitles: {
    position: 'relative',
    zIndex: 2,
    margin: theme.spacing(-1.2, 2, 4, 2),
  },
}));

const PortfolioPage: FC<{ data: ProjectGQL }> = ({ data }) => {
  const classes = useStyles();
  const projectData = data.portfolioPage.frontmatter;
  const { projects } = projectData;
  const { componentType, isMobile } = useComponentType();
  const developerProfile = useDeveloperProfile();
  const [selectedProject, setSelectedProject] = useState(-1);
  const [navbarNumberTitle, setNavbarNumberTitle] = useState(0);
  const sortedGroupsOfProjects = getTabsData(projects);
  const projectsLabels: string[] = [...sortedGroupsOfProjects.map((object) => object.projectLabel)];
  const getNavbarTitle = (type: number) => {
    const title = projectsLabels;
    return title[type];
  };
  const tabLabelTitle = getNavbarTitle(navbarNumberTitle);

  // filter all projects depending on their label
  const filteredProjects = sortedGroupsOfProjects
    .filter((project) => {
      return project.projectLabel === tabLabelTitle;
    })
    .map((project) => project.projectProperties)
    .flat(1);

  const handleChange: TabsProps['onChange'] = (event, newValue) => {
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

  // if is first label, choose last label
  const handlePreviousProject = (index: number) => {
    return index === 0 ? previousNavbarTitle() : setSelectedProject(index - 1);
  };

  // if is last label, choose first label
  const handleNextProject = (index: number) => {
    return index < sortedGroupsOfProjects[navbarNumberTitle].projectProperties.length - 1
      ? setSelectedProject(index + 1)
      : nextNavbarTitle();
  };

  const renderProject = (project: ProjectType, index: number) => (
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
        title: projectData.portfolioPageTitle,
        description: projectData.portfolioPageDescription,
        imageUrl: projectData.portfolioPageImage.publicURL,
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
        <Box className={classes.projects}>{filteredProjects.map(renderProject)}</Box>
      </Box>
    </Layout>
  );
};

export default PortfolioPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    portfolioPage: markdownRemark(fileAbsolutePath: { regex: "/portfolio/index-1.md/" }) {
      frontmatter {
        portfolioPageTitle
        portfolioPageDescription
        portfolioPageImage {
          publicURL
        }
        projects {
          projectLabel
          projectCode
          projectDescription
          projectRole
          projectPreviewNote
          projectApp
          projectStartDate
          projectFinishDate
          projectMockups
          projectPreviewImage {
            publicURL
          }
          projectTechnologies {
            technologyName
          }
          projectName
        }
      }
    }
  }
`;
