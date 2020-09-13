import React from 'react';
import { useFormik, ErrorMessage, Formik, Form, Field } from 'formik';
// import { TextField } from 'formik-material-ui';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';

import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { Container, Box, makeStyles, Card, useTheme, useMediaQuery } from '@material-ui/core';
import { Send } from 'react-feather';
import { DetailsCard } from '../../components/DetailsCard';
import { SectionTitle } from '../../components/SectionTitle';
import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import { userData, textFieldData } from './data';

const contactPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

// interface Values {
//   email: string;
//   password: string;
// }

function TextFieldWrap(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value);
    },
    [setFieldValue, name],
  );
  return <TextField {...fieldToTextField(props)} {...textFieldData} onChange={onChange} />;
}

interface FormValues {
  fullName: string;
  email: string;
  title: string;
  messageContent: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(8, 2, 0, 2),
    },
  },

  main: {
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  detailsCard: {
    marginBottom: theme.spacing(2.5),

    [theme.breakpoints.up('lg')]: {
      height: 668,
      width: 280,
      display: 'block',
      position: 'sticky',

      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      position: 'sticky',
    },
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      boxShadow: contactPageItemShadow,
    },
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: contactPageItemShadow,

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

  project: {
    [theme.breakpoints.up('lg')]: {
      width: 400,
      height: 224,
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
    boxShadow: '0 2px 4px 0 rgba(47, 84, 235, 0.15), 0 8px 16px 0 rgba(47, 84, 235, 0.15)',
  },
  title: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 2),
    },
  },
}));

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required field'),
  email: Yup.string().required('E-mail adress is required field').email(),
  title: Yup.string().required('Title is required field'),
  messageContent: Yup.string().required('Message content is required field'),
});

const initialValues: FormValues = {
  fullName: '',
  email: '',
  title: '',
  messageContent: '',
};

const ContactPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile && !isTablet;

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.detailsCard}>
          <DetailsCard type="desktop" {...userData} />
        </Box>
      )}
      {!isDesktop && <Card className={classes.navbar}>navbar</Card>}

      <Box className={classes.main}>
        {isDesktop && <Card className={classes.navbar}>navbar</Card>}

        {isMobile && (
          <Box className={classes.detailsCard}>
            <DetailsCard type="mobile" {...userData} />
          </Box>
        )}
        {isTablet && !isMobile && (
          <Box className={classes.detailsCard}>
            <DetailsCard type="tablet" {...userData} />
          </Box>
        )}

        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>Contact</SectionTitle>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Box className={classes.inputs}>
                    <Box className={classes.nameAndEmail}>
                      <Field component={TextFieldWrap} name="fullName" type="fullName" label="Full name" />
                      <Field component={TextFieldWrap} name="email" type="email" label="E-mail adress" />
                    </Box>
                    <Field component={TextFieldWrap} name="title" type="title" label="Title" />
                    <Field
                      component={TextFieldWrap}
                      multiline
                      name="messageContent"
                      type="messageContent"
                      label="Message content"
                    />
                  </Box>
                  <Box className={classes.buttonWrapper}>
                    <Button
                      className={classes.button}
                      color="primary"
                      variant="contained"
                      type="submit"
                      startIcon={<Send size={16} />}
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      send message
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
