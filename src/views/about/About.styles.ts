import { makeStyles } from '@material-ui/core';

export const useAboutStyles = makeStyles((theme) => ({
  aboutContentContainer: {
    width: '100%',
  },
  content: {
    marginBottom: theme.spacing(6),
  },
  title: {
    width: '100%',
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 0),
    },
  },
}));
