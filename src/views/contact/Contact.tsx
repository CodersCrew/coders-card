import React, { useState } from 'react';
import { Send } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Snackbar } from '@material-ui/core';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { SectionTitle } from '@/components/SectionTitle';
import { TextField } from '@/components/TextField';

import { useContactStyles } from './Contact.styles';
import { MovingDots } from './MovingDots';

const defaultValues = {
  fullName: '',
  email: '',
  title: '',
  messageContent: '',
};

type FormValues = typeof defaultValues;

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isRequired = { required: 'This field is required' };

const isEmail = {
  pattern: {
    value: emailRegex,
    message: 'This field should contain a valid email address',
  },
};

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
  });

type SnackbarState = {
  type: 'success' | 'error';
  text: string;
};

export const Contact = () => {
  const [snackbar, setSnackbar] = useState<SnackbarState | null>(null);
  const classes = useContactStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ defaultValues });

  const buttonText = isSubmitting ? <MovingDots text="Sending" /> : 'Send message';

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      await submitFormData(values);
      setSnackbar({ type: 'success', text: 'Form has been submitted successfully' });
      reset();
    } catch {
      setSnackbar({ type: 'error', text: 'Error when submitting the form' });
    }
  };

  const handleSnackbarClose = () => setSnackbar(null);

  return (
    <Box className={classes.contactContainer}>
      <SectionTitle className={classes.title}>Contact</SectionTitle>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.inputs}>
          <Box className={classes.nameAndEmail}>
            <TextField
              required
              inputProps={register('fullName', { ...isRequired })}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
              label="Full name"
            />
            <TextField
              required
              inputProps={register('email', { ...isRequired, ...isEmail })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              label="E-mail address"
            />
          </Box>
          <TextField
            required
            inputProps={register('title', { ...isRequired })}
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
            label="Title"
          />
          <TextField
            required
            inputProps={register('messageContent', { ...isRequired })}
            error={Boolean(errors.messageContent)}
            helperText={errors.messageContent?.message}
            multiline
            rows={8}
            label="Message content"
          />
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            startIcon={isSubmitting ? null : <Send size={16} />}
            disabled={isSubmitting}
          >
            {buttonText}
          </Button>
        </Box>
      </form>
      <Snackbar
        open={Boolean(snackbar)}
        className={clsx(classes.snackbar, snackbar?.type)}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbar?.text}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Box>
  );
};
