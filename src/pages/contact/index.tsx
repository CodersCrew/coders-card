import React from 'react';
import { Send } from 'react-feather';
import { Box, makeStyles } from '@material-ui/core';
import { Form, Formik, FormikConfig, useFormikContext } from 'formik';
import { graphql } from 'gatsby';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionTitle } from '../../components/SectionTitle';
import { FormikTextField } from '../../components/TextField';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { FC } from '../../typings/components';
import { textFieldData } from '../../views/contact-page/data';
import { ContactGQL } from '../../views/contact-page/types';

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

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label('Full name'),
  email: Yup.string().required().email().label('Email'),
  title: Yup.string().required().label('Title'),
  messageContent: Yup.string().required().label('Message'),
});

const useStyles = makeStyles((theme) => ({
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

const ContactPage: FC<{ data: ContactGQL }> = ({ data }) => {
  const contactData = data.contactPage.frontmatter;
  const classes = useStyles();
  const developerProfile = useDeveloperProfile();

  const handleSubmit: FormConfig['onSubmit'] = (values, helpers) => {
    setTimeout(() => {
      helpers.setSubmitting(false);
    }, 500);

    const encode = (record: Record<string, string>) => {
      return Object.keys(record)

        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(record[key])}`)
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
      .then(console.log)
      .catch(console.log);
  };

  return (
    <Layout
      developerProfile={developerProfile}
      meta={{
        title: contactData.contactPageTitle,
        description: contactData.contactPageDescription,
        imageUrl: contactData.contactPageImage.publicURL,
      }}
      variant="withDetailsCard"
    >
      <Box className={classes.contactContainer}>
        <SectionTitle className={classes.title}>Contact</SectionTitle>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <ContactPageForm />
        </Formik>
      </Box>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageQuery {
    contactPage: markdownRemark(fileAbsolutePath: { regex: "/contact/index-1.md/" }) {
      frontmatter {
        contactPageTitle
        contactPageDescription
        contactPageImage {
          publicURL
        }
      }
    }
  }
`;
