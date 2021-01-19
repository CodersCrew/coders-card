import React, { ReactNode } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';

import { DetailsCard } from '@/components/DetailsCard';
import { Head } from '@/components/Head';
import { Navbar } from '@/components/Navbar';
import { useComponentType } from '@/hooks/useComponentType';
import { DeveloperProfileData } from '@/hooks/useDeveloperProfile';

export type LayoutProps = {
  children: ReactNode;
  developerProfile: DeveloperProfileData;
  meta: {
    title?: string;
    description?: string;
    imageUrl?: string;
  };
  variant?: 'default' | 'withDetailsCard';
};

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
    padding: theme.spacing(3, 3, 4, 3),

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 7, 3),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      padding: theme.spacing(4),
      boxShadow: theme.shadows[5],
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
  detailsCard: {
    margin: theme.spacing(0, 3, 4, 3),
  },
}));

export const Layout = ({ children, meta, developerProfile, variant = 'default' }: LayoutProps) => {
  const classes = useStyles();
  const { componentType, isDesktop } = useComponentType();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Head
        title={meta.title}
        description={meta.description}
        author={`${developerProfile.firstName} ${developerProfile.lastName}`}
      />
      {isDesktop ? (
        <Box className={classes.aside}>
          <DetailsCard type={componentType} />
        </Box>
      ) : null}
      <Box className={classes.main}>
        <Navbar
          className={classes.navbar}
          type={componentType}
          fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
          position={developerProfile.position}
          image={developerProfile.avatar.publicURL}
          resumeLink={developerProfile.cv}
        />
        {!isDesktop && variant === 'withDetailsCard' ? (
          <Box className={classes.detailsCard}>
            <DetailsCard type={componentType} />
          </Box>
        ) : null}
        <Box className={classes.mainContent}>{children}</Box>
      </Box>
    </Container>
  );
};
