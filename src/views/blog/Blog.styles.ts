import { makeStyles } from '@material-ui/core';

export const useBlogStyles = makeStyles((theme) => ({
  blogContainer: {
    width: '100%',
  },
  blogPosts: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      gridRowGap: theme.spacing(3),
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '400px 400px',
      alignItems: 'center',
      justifyContent: 'space-between',
      gridGap: theme.spacing(5),
    },
  },
  title: {
    width: '100%',
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 0, 4, 0),
    },
  },
  blogPost: {
    boxShadow: theme.shadows[4],

    [theme.breakpoints.up('sm')]: {
      maxWidth: 800,
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 400,
    },
  },
}));
