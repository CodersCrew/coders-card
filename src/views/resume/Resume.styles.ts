import { makeStyles } from '@material-ui/core';

export const useResumeStyles = makeStyles((theme) => ({
  resumePageContainer: {
    width: '100%',
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
  divider: {
    height: 16,
    width: 2,
    backgroundColor: theme.palette.divider,
  },
  project: {
    marginBottom: theme.spacing(5),
  },
}));
