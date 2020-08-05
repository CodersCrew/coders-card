import React, { FC } from 'react';

import { Tag } from '../Tag/Tag';
import { BlogPostDialogProps } from './BlogPostDialog';
import { IconButton } from '../IconButton/IconButton';

import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    '& .MuiDialog-paper': {
      overflowY: 'inherit',
    },
    '& .MuiBackdrop-root': {
      backgroundColor: fade(theme.palette.text.primary, 0.8),
    },
    '& .MuiPaper-rounded': { borderRadius: 15 },
  },
  buttons: {
    position: 'absolute',
    left: '103%',
  },
  buttonX: {
    margin: theme.spacing(2, 0, 5, 0),
  },
  buttonChevronLeft: {
    marginBottom: theme.spacing(2.5),
  },
  header: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(4),
  },
  img: { borderTopLeftRadius: 15, borderTopRightRadius: 15, width: 600, height: 336 },
  headerTitle: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    marginBottom: theme.spacing(0.6),
  },
  headerContent: { marginTop: theme.spacing(1.5) },
  content: {
    padding: theme.spacing(4),
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.5em',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: fade(theme.palette.text.primary, 0.8),
    },
  },
}));

const BlogPostDialogTablet: FC<BlogPostDialogProps> = ({ isOpen, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={isOpen} {...props}>
        <Box className={classes.buttons}>
          <Box className={classes.buttonX}>
            <IconButton {...props} size={'small'}>
              <X size={20} />
            </IconButton>
          </Box>
          <Box className={classes.buttonChevronLeft}>
            <IconButton {...props} size={'small'}>
              <ChevronLeft size={20} />
            </IconButton>
          </Box>
          <IconButton {...props} size={'small'}>
            <ChevronRight size={20} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} />
        <Box className={classes.header}>
          <Box className={classes.headerTitle}>
            <Typography variant="h2" color="textPrimary">
              {props.title}
            </Typography>
            <Tag label="Teamwork" color="secondary" />
          </Box>
          <Typography variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Typography className={classes.headerContent} variant="body1" color="textSecondary">
            {props.contentheader}
          </Typography>
        </Box>
        <Box className={classes.content}>
          <Typography variant="body2" color="textSecondary">
            {props.contentmain}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogTablet;
