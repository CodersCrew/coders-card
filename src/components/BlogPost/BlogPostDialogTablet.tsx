import React, { FC } from 'react';

import { BlogPostDialogProps } from './BlogPostDialog';
import { IconButton } from '../IconButton/IconButton';
import { Tag } from '../Tag/Tag';

import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    '& .MuiDialog-paper': {
      overflowY: 'inherit',
    },
    '& .MuiBackdrop-root': {
      backgroundColor: fade(theme.palette.text.primary, 0.8),
    },
    '& .MuiPaper-rounded': { borderRadius: 15 },
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.5em',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: fade(theme.palette.text.primary, 0.8),
    },
    '& .MuiDialog-container': {
      height: 'auto',
    },
  },
  img: { borderTopLeftRadius: 15, borderTopRightRadius: 15, width: '100%', height: 'auto' },
  headerTitle: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    marginBottom: theme.spacing(0.5),
  },
  headerContent: { marginTop: theme.spacing(1.5) },
}));

const BlogPostDialogTablet: FC<BlogPostDialogProps> = (props) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={props.isOpen}>
        <Box position="absolute" left="620px">
          <Box mb={5}>
            <IconButton onClick={props.handleClose} size={'small'}>
              <X size={30} />
            </IconButton>
          </Box>
          <Box mb={2.5}>
            <IconButton onClick={props.handlePrev} size={'small'}>
              <ChevronLeft size={30} />
            </IconButton>
          </Box>
          <IconButton onClick={props.handleNext} size={'small'}>
            <ChevronRight size={30} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} />
        <Box bgcolor="background.light" p={4}>
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
        <Box p={4}>
          <Typography variant="body2" color="textSecondary">
            {props.contentmain}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogTablet;
