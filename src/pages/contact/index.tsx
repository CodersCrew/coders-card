import React from 'react';
import { Send } from 'react-feather';
import { Helmet } from 'react-helmet';
import { Box, Container, makeStyles } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { DetailsCard } from '../../components/DetailsCard';
import { Navbar } from '../../components/Navbar';
import { SectionTitle } from '../../components/SectionTitle';
import { TextField } from '../../components/TextField';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { textFieldData } from '../../views/contact-page/data';

const contactPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

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

const initialValues: FormValues = {
  fullName: '',
  email: '',
  title: '',
  messageContent: '',
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required field'),
  email: Yup.string().required('E-mail adress is required field').email(),
  title: Yup.string().required('Title is required field'),
  messageContent: Yup.string().required('Message content is required field'),
});

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
    margin: theme.spacing(0, 2.5, 0, 2.5),
    [theme.breakpoints.up('lg')]: {
      height: 668,
      width: 280,
      display: 'block',
      position: 'sticky',
      marginRight: theme.spacing(4),
    },
  },

  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    padding: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(4, 2.5, 4, 2.5),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(4, 0, 0, 0),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      boxShadow: contactPageItemShadow,
      width: '100%',
      padding: theme.spacing(4),
    },
  },

  navbar: {
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
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

const ContactPage = () => {
  const classes = useStyles();

  const developerProfile = useDeveloperProfile();
  const { componentType, isDesktop, isMobile, isTablet } = useComponentType();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.detailsCard}>
          <DetailsCard
            fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
            address={`${developerProfile.city}, ${developerProfile.country}`}
            image={developerProfile.avatar.publicURL}
            position={developerProfile.position}
            socialMedia={[
              { name: 'facebook', link: developerProfile.socialMedia.facebook },
              { name: 'github', link: developerProfile.socialMedia.github },
              { name: 'twitter', link: developerProfile.socialMedia.twitter },
              { name: 'instagram', link: developerProfile.socialMedia.instagram },
            ]}
            phone={developerProfile.phone}
            email={developerProfile.email}
            isFreelancer={developerProfile.isFreelancer}
            resumeLink={developerProfile.cv}
            type={componentType}
          />
        </Box>
      )}
      <Box className={classes.main}>
        {(isMobile || isTablet) && (
          <>
            <Navbar
              className={classes.navbar}
              type={componentType}
              fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
              position={developerProfile.position}
              image={developerProfile.avatar.publicURL}
              resumeLink={developerProfile.cv}
            />
            <Box className={classes.detailsCard}>
              <DetailsCard
                fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
                address={`${developerProfile.city}, ${developerProfile.country}`}
                image={developerProfile.avatar.publicURL}
                position={developerProfile.position}
                socialMedia={[
                  { name: 'facebook', link: developerProfile.socialMedia.facebook },
                  { name: 'github', link: developerProfile.socialMedia.github },
                  { name: 'twitter', link: developerProfile.socialMedia.twitter },
                  { name: 'instagram', link: developerProfile.socialMedia.instagram },
                ]}
                phone={developerProfile.phone}
                email={developerProfile.email}
                isFreelancer={developerProfile.isFreelancer}
                resumeLink={developerProfile.cv}
                type={componentType}
              />
            </Box>
          </>
        )}
        <Box className={classes.mainContent}>
          <Box>
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
