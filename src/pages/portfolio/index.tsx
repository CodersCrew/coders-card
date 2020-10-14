import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';

import { DetailsCard } from '../../components/DetailsCard';
import { Navbar } from '../../components/Navbar';
import { PortfolioCard } from '../../components/PortfolioCard';
import { PortfolioProjectDialog } from '../../components/PortfolioProject';
import { SectionTitle } from '../../components/SectionTitle';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { FC } from '../../typings/components';
import { ProjectGQL } from '../../views/portfolio-page/types';

const portfolioPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(8, 2, 0, 2),
    },
  },
  aside: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'sticky',
      top: theme.spacing(8),
      height: 668,
      width: 280,
      marginRight: theme.spacing(4),
    },
  },
  main: {
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    margin: theme.spacing(0, 0, 7, 0),

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 7, 3),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      boxShadow: portfolioPageItemShadow,
    },
  },
  navbar: {
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
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

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 2),
    },
  },
}));

const PortfolioPage: FC<{ data: ProjectGQL }> = ({ data }) => {
  const projectData = data.portfolioPage.frontmatter;
  const classes = useStyles();
  const { componentType, isDesktop } = useComponentType();
  const developerProfile = useDeveloperProfile();
  const [selectedProject, setSelectedProject] = useState(-1);

  // no project will have index equal to -1 therefore no project will be selected
  const handleCloseProject = () => {
    setSelectedProject(-1);
  };
  // if is first project, choose last project
  const handlePreviousProject = (index: number) => {
    setSelectedProject(index === 0 ? projectData.projects.length - 1 : index - 1);
  };

  // if is last project, choose first project
  const handleNextProject = (index: number) => {
    setSelectedProject(index === projectData.projects.length - 1 ? 0 : index + 1);
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>{projectData.portfolioPageTitle}</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type={componentType} />
        </Box>
      )}
      <Box className={classes.main}>
        <Navbar
          className={classes.navbar}
          type={componentType}
          fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
          position={developerProfile.position}
          image={developerProfile.avatar.publicURL}
          resumeLink={developerProfile.cv}
        />
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>My works</SectionTitle>
            <Box className={classes.projects}>
              {projectData.projects.map((project, index) => (
                <div key={`${project.projectName}-${project.projectDescription}`}>
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
                    subtitle={`
                      ${dayjs(project.projectStartDate).format('YYYY-MM-DD')}
                      -
                      ${dayjs(project.projectFinishDate).format('YYYY-MM-DD')}`}
                    contentMainDescription={project.projectDescription}
                    contentMainRole={project.projectRole}
                    contentHeader={project.projectPreviewNote}
                    tagtitle={project.projectLabel}
                    mockupsUrl={project.projectMockups ?? ''}
                    projectUrl={project.projectApp ?? ''}
                    codeUrl={project.projectCode ?? ''}
                  />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PortfolioPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    portfolioPage: markdownRemark(fileAbsolutePath: { regex: "/portfolio/index-1.md/" }) {
      frontmatter {
        portfolioPageTitle
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
