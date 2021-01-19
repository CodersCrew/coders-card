import React from 'react';
import { Send } from 'react-feather';
import { Box } from '@material-ui/core';
import { Form, useFormikContext } from 'formik';

import { Button } from '@/components/Button';
import { FormikTextField } from '@/components/TextField';
import type { TextFieldProps } from '@/components/TextField/TextField';

import { useContactStyles } from './Contact.styles';

const textFieldProps: TextFieldProps = {
  variant: 'filled',
};

export const ContactForm = () => {
  const classes = useContactStyles();
  const { submitForm, isSubmitting } = useFormikContext();

  return (
    <Form name="contact" action="/contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <FormikTextField type="hidden" name="form-name" value="contact" />
      <Box className={classes.inputs}>
        <Box className={classes.nameAndEmail}>
          <FormikTextField {...textFieldProps} name="fullName" label="Full name" />
          <FormikTextField {...textFieldProps} name="email" label="E-mail adress" />
        </Box>
        <FormikTextField {...textFieldProps} name="title" label="Title" />
        <FormikTextField {...textFieldProps} multiline name="messageContent" label="Message content" />
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
