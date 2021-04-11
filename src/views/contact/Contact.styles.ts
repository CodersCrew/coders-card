import { makeStyles } from '@material-ui/core';

export const useContactStyles = makeStyles((theme) => ({
  contactContainer: {
    width: '100%',
  },
  inputs: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridRowGap: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      gridRowGap: theme.spacing(4),
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateRows: '1fr',
      gridGap: theme.spacing(4),
    },
  },
  nameAndEmail: {
    display: 'grid',
    gridGap: theme.spacing(3),

    '&.MuiFormControl-fullWidth': {
      margin: theme.spacing(0, 2, 4, 2),
    },

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      gridTemplateColumns: '1fr 1fr',
      gridGap: theme.spacing(4),
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: theme.spacing(5),
      justifyContent: 'space-between',
    },
  },
  buttonWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(4),
  },
  button: {
    width: 158,
    height: 40,
    borderRadius: 8,
    boxShadow: theme.shadows[6],
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
  snackbar: {
    '&.success > div': {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },

    '&.error > div': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
  },
}));
