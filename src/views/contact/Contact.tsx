import React from 'react';
import { Box } from '@material-ui/core';
import { Formik, FormikConfig } from 'formik';
import * as Yup from 'yup';

import { SectionTitle } from '@/components/SectionTitle';

import { useContactStyles } from './Contact.styles';
import { ContactForm } from './ContactForm';

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

const encode = (record: Record<string, string>) => {
  return Object.keys(record)

    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(record[key])}`)
    .join('&');
};

const submitFormData = (values: FormValues) =>
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'contact',
      ...values,
    }),
  })
    // eslint-disable-next-line no-console
    .then(console.info)
    // eslint-disable-next-line no-console
    .catch(console.error);

export const Contact = () => {
  const classes = useContactStyles();

  const handleSubmit: FormConfig['onSubmit'] = async (values, helpers) => {
    await submitFormData(values);
    helpers.setSubmitting(false);
  };

  return (
    <Box className={classes.contactContainer}>
      <SectionTitle className={classes.title}>Contact</SectionTitle>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <ContactForm />
      </Formik>
    </Box>
  );
};
