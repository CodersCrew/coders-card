import React from 'react';
import { Container, Box, makeStyles, Card, useTheme, useMediaQuery } from '@material-ui/core';

import { DetailsCard } from '../../components/DetailsCard';
import { SectionTitle } from '../../components/SectionTitle';
import { PortfolioCard } from '../../components/PortfolioCard';

import { projectData, userData } from './data';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      minHeight: '100vh',
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
    boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
    borderRadius: 16,
    margin: theme.spacing(0, 3, 7, 3),

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
    },
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
    borderRadius: 8,
    height: 120,
    width: '100%',
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
      height: 56,
    },
  },
  projectsContainer: {
    boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
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
    gridRowGap: theme.spacing(3),

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
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 2),
    },
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile && !isTablet;

  return (
    <Container className={classes.container} maxWidth="lg">
      <Box className={classes.aside}>{isDesktop && <DetailsCard type="desktop" {...userData} />}</Box>
      <Box className={classes.main}>
        <Card className={classes.navbar}>navbar</Card>
        <Card className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>My works</SectionTitle>
            <Box className={classes.projects}>
              {[1, 2, 3, 4, 5, 6].map((_) => (
                <Box key={_} className={classes.project}>
                  {<PortfolioCard type={isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'} {...projectData} />}
                </Box>
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default IndexPage;
