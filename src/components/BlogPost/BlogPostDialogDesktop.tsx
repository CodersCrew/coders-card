import React, { FC } from 'react';
import { ChevronLeft, ChevronRight, X } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { IconButton } from '../IconButton/IconButton';
import { Tag } from '../Tag/Tag';
import { BlogPostDialogProps } from './BlogPostDialog';

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

const BlogPostDialogDesktop: FC<BlogPostDialogProps> = (props) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={props.isOpen} onClose={props.handleClose}>
        <Box position="absolute" left="530px">
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
            <Typography variant="h4" color="textPrimary">
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

export default BlogPostDialogDesktop;
