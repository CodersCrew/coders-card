import React from 'react';
import { Send } from 'react-feather';
import { Helmet } from 'react-helmet';
import { Box, Container, makeStyles } from '@material-ui/core';
import { Form, Formik, FormikConfig, useFormikContext } from 'formik';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { DetailsCard } from '../../components/DetailsCard';
import { Navbar } from '../../components/Navbar';
import { SectionTitle } from '../../components/SectionTitle';
import { FormikTextField } from '../../components/TextField';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { textFieldData } from '../../views/contact-page/data';

const contactPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

type FormValues = {
  fullName: string;
  email: string;
  title: string;
  messageContent: string;
};

type FormConfig = FormikConfig<FormValues>;

const initialValues: FormValues = {
  fullName: '',
  email: '',
  title: '',
  messageContent: '',
};

type encodeType = {
  'form-name': string;
  values: FormValues;
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label('Full name'),
  email: Yup.string().required().email().label('Email'),
  title: Yup.string().required().label('Title'),
  messageContent: Yup.string().required().label('Message'),
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

const ContactPageForm = () => {
  const classes = useStyles();
  const { submitForm, isSubmitting } = useFormikContext();

  return (
    <Form name="contact" action="/contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <FormikTextField type="hidden" name="form-name" value="contact" />
      <Box className={classes.inputs}>
        <Box className={classes.nameAndEmail}>
          <FormikTextField {...textFieldData} name="fullName" label="Full name" />
          <FormikTextField {...textFieldData} name="email" label="E-mail adress" />
        </Box>
        <FormikTextField {...textFieldData} name="title" label="Title" />
        <FormikTextField {...textFieldData} multiline name="messageContent" label="Message content" />
      </Box>
      <Box className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
          startIcon={<Send size={16} />}
          disabled={isSubmitting}
          onSubmit={submitForm}
        >
          send message
        </Button>
      </Box>
    </Form>
  );
};

const ContactPage = () => {
  const classes = useStyles();
  const developerProfile = useDeveloperProfile();
  const { componentType, isDesktop, isMobile, isTablet } = useComponentType();

  const handleSubmit: FormConfig['onSubmit'] = (values, helpers) => {
    setTimeout(() => {
      helpers.setSubmitting(false);
    }, 500);

    const encode = (data: encodeType) => {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values,
      }),
    })
      .then(() => {
        alert('success!');
      })
      .catch((error) => alert(error));
  };

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
        {isDesktop && (
          <Navbar
            className={classes.navbar}
            type={componentType}
            fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
            position={developerProfile.position}
            image={developerProfile.avatar.publicURL}
            resumeLink={developerProfile.cv}
          />
        )}

        {(isMobile || isTablet) && (
          <Box>
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
          </Box>
        )}
        <Box className={classes.mainContent}>
          <Box>
            <SectionTitle className={classes.title}>Contact</SectionTitle>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <ContactPageForm />
            </Formik>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
