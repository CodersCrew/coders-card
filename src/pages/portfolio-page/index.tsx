import React from 'react';
import { Container, Box, makeStyles, Card } from '@material-ui/core';

import { DetailsCard } from '../../components/DetailsCard';
import { SectionTitle } from '../../components/SectionTitle';
import { CardProps } from '../../components/DetailsCard/cardProps';
import { PortfolioCard } from '../../components/PortfolioCard';

import avatar from '../../images/avatar.jpg';
import project from '../../images/download.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
  },
  aside: {
    height: 668,
    width: 280,
    marginRight: theme.spacing(4),
  },
  main: {
    width: '100%',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    // temporary styles
    height: 56,
    width: '100%',
    boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
    borderRadius: 8,
    marginBottom: theme.spacing(7),
  },
  projectsContainer: {
    // temporary styles

    width: '100%',
    boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
    borderRadius: 16,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(7),
  },
  projects: {
    display: 'grid',
    gridTemplateColumns: '400px 400px',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: theme.spacing(5),
  },
  project: {
    width: 400,
    height: 224,
  },
  title: {
    padding: theme.spacing(0, 2, 4, 2),
  },
}));

const portfolioCardProps = {
  image: project,
  title: 'My Awesome Project',
  description:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  label: 'Mobile app',
  onClick: () => {
    window.alert('siemano');
  },
};

const detailsCardProps: CardProps = {
  fullName: 'Jonathan Harwood',
  image: avatar,
  position: 'Full stack developer',
  socialMedia: [
    { name: 'facebook', link: 'https://www.facebook.com/' },
    { name: 'github', link: 'https://github.com/' },
    { name: 'twitter', link: 'https://twitter.com/' },
    { name: 'instagram', link: 'https://www.instagram.com/' },
  ],
  phone: '+48 601 345 132',
  email: 'jonathan.harwood@gmail.com',
  address: 'Wroclaw, Poland',
  isFreelancer: true,
  resumeLink: 'https://www.docdroid.net/WyjIuyO/fake-resume-pdf',
};

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Box className={classes.aside}>
        <DetailsCard type="desktop" {...detailsCardProps} />
      </Box>
      <Box className={classes.main}>
        <Card className={classes.navbar} />
        <Card className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <Box className={classes.title}>
              <SectionTitle>My works</SectionTitle>
            </Box>
            <Box className={classes.projects}>
              {[1, 2, 3, 4, 5, 6].map((_) => (
                <Box key={_} className={classes.project}>
                  <PortfolioCard type="desktop" {...portfolioCardProps} />
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
