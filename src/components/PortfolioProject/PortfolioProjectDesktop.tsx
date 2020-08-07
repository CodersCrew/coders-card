import React, { FC } from 'react';

import { PortfolioProjectDialogProps } from './PortfolioProject';
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
  },
  buttons: {
    position: 'absolute',
    left: '103%',
  },
  buttonX: {
    marginBottom: theme.spacing(5),
  },
  buttonChevronLeft: {
    marginBottom: theme.spacing(2.5),
  },
  header: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(4),
  },
  img: { borderTopLeftRadius: 15, borderTopRightRadius: 15, width: 600, height: 330 },
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

const BlogPostDialogDesktop: FC<PortfolioProjectDialogProps> = ({ isOpen, ...props }) => {
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
            <Typography variant="h4" color="textPrimary">
              {props.title}
            </Typography>
            <Tag label="Teamwork" color="secondary" />
          </Box>
          <Typography variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Typography className={classes.headerContent} variant="body1" color="textSecondary">
            {props.contentHeader}
          </Typography>
        </Box>
        <Box className={classes.content}>
          <Typography variant="body2" color="textSecondary">
            {props.contentMainDescription}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogDesktop;
