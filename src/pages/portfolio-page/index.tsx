import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { Container, Box, makeStyles, Card, useTheme, useMediaQuery } from '@material-ui/core';

import { FC } from '../../typings/components';

import { DetailsCard } from '../../components/DetailsCard';
import { PortfolioProjectDialog } from '../../components/PortfolioProject';
import { SectionTitle } from '../../components/SectionTitle';
import { PortfolioCard } from '../../components/PortfolioCard';

import { ProjectGQL } from '../../views/portfolio-page/types';
import { mapProjectQueryToProjectComponentData } from '../../views/portfolio-page/utils';

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: portfolioPageItemShadow,
    borderRadius: 8,
    height: 120,
    width: '100%',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
      height: 56,
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
  const projectData = mapProjectQueryToProjectComponentData(data);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile && !isTablet;
  const componentType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

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
        <title>{projectData.pageTitle}</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type="desktop" />
        </Box>
      )}
      <Box className={classes.main}>
        <Card className={classes.navbar}>navbar</Card>
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>My works</SectionTitle>
            <Box className={classes.projects}>
              {projectData.projects.map((project, index) => (
                <div key={index}>
                  <PortfolioCard
                    className={classes.project}
                    type={componentType}
                    title={project.title}
                    label={project.label}
                    description={project.previewNote}
                    image={project.image}
                    onClick={() => setSelectedProject(index)}
                  />
                  <PortfolioProjectDialog
                    type={componentType}
                    handleClose={() => handleCloseProject()}
                    handlePrev={() => handlePreviousProject(index)}
                    handleNext={() => handleNextProject(index)}
                    isOpen={index === selectedProject}
                    title={project.title}
                    tags={project.technologies}
                    imgurl={project.image}
                    subtitle={`
                      ${dayjs(project.startDate).format('YYYY-MM-DD')}
                      -
                      ${dayjs(project.finishDate).format('YYYY-MM-DD')}`}
                    contentMainDescription={project.description}
                    contentMainRole={project.role}
                    contentHeader={project.previewNote}
                    tagtitle={project.label}
                    mockupsUrl={project.mockupsUrl}
                    projectUrl={project.projectUrl}
                    codeUrl={project.codeUrl}
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
        portfolio_page_title
        projects {
          project_label
          project_code
          project_description
          project_role
          project_preview_note
          project_app
          project_start_date
          project_finish_date
          project_mockups
          project_preview_image {
            publicURL
          }
          project_technologies {
            technology_name
          }
          project_name
        }
      }
    }
  }
`;
