import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';

import { IconButton } from '@/components/IconButton/IconButton';
import { Tag } from '@/components/Tag/Tag';
import { getDialogWrapperStyles } from '@/utils/styles';

import type { BlogPostDialogVariantProps } from './BlogPostDialog.types';

const useStyles = makeStyles((theme) => ({
  wrapper: getDialogWrapperStyles(theme),
  img: { borderTopLeftRadius: 15, borderTopRightRadius: 15, width: '100%', height: 'auto' },
  headerTitle: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    marginBottom: theme.spacing(0.5),
  },
  headerContent: { marginTop: theme.spacing(1.5) },
}));

export const BlogPostDialogTablet = (props: BlogPostDialogVariantProps) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={props.isOpen} onClose={props.handleClose}>
        <Box position="absolute" left="620px">
          <Box mb={5}>
            <IconButton onClick={props.handleClose} size="small">
              <X size={30} />
            </IconButton>
          </Box>
          <Box mb={2.5}>
            <IconButton onClick={props.handlePrev} size="small">
              <ChevronLeft size={30} />
            </IconButton>
          </Box>
          <IconButton onClick={props.handleNext} size="small">
            <ChevronRight size={30} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} alt={props.title} />
        <Box bgcolor="background.light" p={4}>
          <Box className={classes.headerTitle}>
            <Typography variant="h2" color="textPrimary">
              {props.title}
            </Typography>
            <Tag label={props.tagtitle} color="secondary" />
          </Box>
          <Typography variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Typography className={classes.headerContent} variant="body1" color="textSecondary">
            {props.contentheader}
          </Typography>
        </Box>
        <Box p={4}>
          <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: props.contentmain }} />
        </Box>
      </Dialog>
    </Box>
  );
};
