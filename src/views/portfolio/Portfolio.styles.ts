import { makeStyles } from '@material-ui/core';

export const usePortfolioStyles = makeStyles((theme) => ({
  titleBox: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
    },
  },
  projectsContainer: {
    width: '100%',
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
      gridRowGap: theme.spacing(5),
      gridColumnGap: theme.spacing(5),
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
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 0, 4, 0),
    },
  },
  navbarTitles: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
    margin: theme.spacing(-1.2, 2, 4, 2),
  },
}));
