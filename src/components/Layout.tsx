import React, { ReactNode } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

import { DetailsCard } from '@/components/DetailsCard';
import { Navbar } from '@/components/Navbar';
import { developer } from '@/data/developer';
import { useComponentType } from '@/hooks/useComponentType';

export type LayoutProps = {
  children: ReactNode;
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

export const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  const { pathname } = useRouter();
  const { componentType, isDesktop } = useComponentType();

  const withResponsiveDetailsCard = !isDesktop && (pathname === '/' || pathname === '/contact');

  return (
    <Container className={classes.container} maxWidth="lg">
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type="desktop" />
        </Box>
      )}
      <Box className={classes.main}>
        <Navbar
          className={classes.navbar}
          type={componentType}
          fullName={`${developer.firstName} ${developer.lastName}`}
          position={developer.position}
          image={developer.avatar}
          resumeLink={developer.cv}
        />
        {withResponsiveDetailsCard && (
          <Box className={classes.detailsCard}>
            <DetailsCard type={componentType} />
          </Box>
        )}
        <Box className={classes.mainContent}>{children}</Box>
      </Box>
    </Container>
  );
};
