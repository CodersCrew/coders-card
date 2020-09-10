import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Container, Box, makeStyles, Card } from '@material-ui/core';

import { useComponentType } from '../../hooks/useComponentType';
import { DetailsCard } from '../../components/DetailsCard';
import { SectionTitle } from '../../components/SectionTitle';
import { Skill } from '../../components/Skill';
import { Testimonial } from '../../components/Testimonial';
import MarleneImg from '../../images/MarleneWatson.png';
import GabeImg from '../../images/GabeMcdonalid.png';

const portfolioPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    display: 'grid',
    gridTemplateAreas: `
      "navbar"
      "aside"
      "main"`,
    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
      "aside navbar"
      "aside main"`,
      padding: theme.spacing(8, 2, 0, 2),
    },
  },
  aside: {
    gridArea: 'aside',
    display: 'block',
    width: '100%',
    height: 488,
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginBottom: theme.spacing(4),
      height: 288,
    },
    [theme.breakpoints.up('lg')]: {
      position: 'sticky',
      top: theme.spacing(8),
      marginRight: theme.spacing(4),
      width: 280,
      height: 668,
    },
  },
  main: {
    gridArea: 'main',
    width: '100%',
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    marginBottom: theme.spacing(7),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(7),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(7),
      boxShadow: portfolioPageItemShadow,
    },
  },
  navbar: {
    gridArea: 'navbar',
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
  content: {
    marginBottom: theme.spacing(6),
  },
  skillsHeader: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  skills: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    gridGap: theme.spacing(5),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      alignItems: 'center',
      justifyContent: 'center',
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
      margin: theme.spacing(0, 2, 4, 0),
    },
  },
  testimonials: {
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const { componentType, isDesktop, isMobile } = useComponentType();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>About page</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type={componentType} />
        </Box>
      )}
      <Card className={classes.navbar}>navbar</Card>
      <Box className={classes.main}>
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>About me</SectionTitle>
            <Box className={classes.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis ultricies eros, ac iaculis eros
              maximus nec. Phasellus vitae mi felis. Curabitur iaculis nunc laoreet eleifend tincidunt. Aliquam nec
              lectus varius, mattis sapien nec, tristique elit. Suspendisse id sem sit amet mi tempus fermentum. Duis
              non metus nec nisl convallis efficitur. <br /> <br />
              Donec condimentum neque rhoncus congue volutpat. Maecenas scelerisque varius ornare. Morbi egestas rutrum
              mattis. In pulvinar imperdiet tellus vel laoreet. Etiam ac sodales nulla. Nulla sit amet enim ipsum. Nulla
              pharetra turpis tempus venenatis sollicitudin. Nunc lacinia rhoncus leo, non consectetur velit tempus sed.
              Praesent euismod nibh ut massa congue, at condimentum justo egestas. Etiam accumsan felis non ipsum
              vulputate gravida. Etiam elementum vitae nisl a aliquam.
            </Box>
            <SectionTitle className={classes.title}>My skills</SectionTitle>
            <Box className={classes.content}>
              <Typography variant="h6" className={classes.skillsHeader}>
                Technologies
              </Typography>
              <Box className={classes.skills}>
                <Skill level={5}>HTML</Skill>
                <Skill level={5}>CSS</Skill>
                <Skill level={4}>JavaScript (ES9)</Skill>
                <Skill level={3}>SASS</Skill>
                <Skill level={5}>React.js</Skill>
                <Skill level={3}>Redux</Skill>
                <Skill level={2}>Storybook</Skill>
                <Skill level={1}>React Testing Library</Skill>
                <Skill level={2}>Gatsby</Skill>
                <Skill level={3}>Apollo Client</Skill>
                <Skill level={1}>Redux Saga</Skill>
                <Skill level={2}>Next.js</Skill>
              </Box>
              <Typography variant="h6" className={classes.skillsHeader}>
                Tools
              </Typography>
              <Box className={classes.skills}>
                <Skill level={2}>Git</Skill>
                <Skill level={3}>GitHub</Skill>
                <Skill level={1}>JIRA</Skill>
                <Skill level={2}>Trello</Skill>
                <Skill level={5}>Figma</Skill>
                <Skill level={4}>Zeplin</Skill>
              </Box>
              <Typography variant="h6" className={classes.skillsHeader}>
                Other skills
              </Typography>
              <Box className={classes.skills}>
                <Skill level={3}>SCRUM</Skill>
                <Skill level={4}>RWD</Skill>
                <Skill level={2}>Atomic Design</Skill>
              </Box>
            </Box>
            <SectionTitle className={classes.title}>Testimonials</SectionTitle>
            <Box className={classes.testimonials}>
              <Testimonial
                isMobile={isMobile}
                image={MarleneImg}
                description="Mauris suscipit risus ut lorem consequat, id gravida sem vulputate. Donec pharetra mi ac elit hendrerit, at viverra risus fermentum. Proin sit amet viverra dolor."
                labelBold="Marlene Watson"
                label="CEO of Donec"
              />
              <Testimonial
                isMobile={isMobile}
                image={GabeImg}
                description="Suspendisse ullamcorper massa nec lectus volutpat malesuada. Proin at nibh dui. Nunc at tincidunt mauris, non sagittis libero. Proin porta id elit sit amet maximus."
                labelBold="Gabe Mcdonalid"
                label="Marketing specialist in Railroad"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
