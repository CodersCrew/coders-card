import React, { FC } from 'react';

import { Tag } from '../Tag/Tag';
import { PortfolioProjectDialogProps } from './PortfolioProject';
import { IconButton } from '../IconButton/IconButton';
import { Button } from '../Button/Button';

import { X, ChevronLeft, ChevronRight, Code, Image, ExternalLink } from 'react-feather';
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
  button: {
    display: 'flex',
    justifyContent: 'normal',
    margin: theme.spacing(1, 1, 1, 0),
  },
  buttons: {
    display: 'flex',
  },
  iconButtons: {
    position: 'absolute',
    left: '103%',
  },
  iconButtonX: {
    margin: theme.spacing(2, 0, 5, 0),
  },
  iconButtonChevronLeft: {
    marginBottom: theme.spacing(2.5),
  },
  header: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(4),
  },
  img: { borderTopLeftRadius: 15, borderTopRightRadius: 15, width: '100%', height: 'auto' },
  headerTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(0.6),
  },
  headerContent: { marginTop: theme.spacing(1.5) },
  tags: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    padding: theme.spacing(0, 3, 3, 3),
    '& > *': {
      margin: theme.spacing(0.5, 1, 0.5, 0),
    },
  },
  content: { paddingRight: theme.spacing(3), paddingLeft: theme.spacing(3) },
  contentMain: { padding: theme.spacing(3, 3, 1.5, 3) },
}));

const BlogPostDialogTablet: FC<PortfolioProjectDialogProps> = ({ isOpen, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={isOpen} {...props}>
        <Box className={classes.iconButtons}>
          <Box className={classes.iconButtonX}>
            <IconButton {...props} size={'small'}>
              <X size={30} />
            </IconButton>
          </Box>
          <Box className={classes.iconButtonChevronLeft}>
            <IconButton {...props} size={'small'}>
              <ChevronLeft size={30} />
            </IconButton>
          </Box>
          <IconButton {...props} size={'small'}>
            <ChevronRight size={30} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} />
        <Box className={classes.header}>
          <Box className={classes.headerTitle}>
            <Typography variant="h2" color="textPrimary">
              {props.title}
            </Typography>
            <Tag label="Mobile app" color="default" />
          </Box>
          <Typography variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Typography className={classes.headerContent} variant="body1" color="textSecondary">
            {props.contentHeader}
          </Typography>
          <Box className={classes.buttons}>
            <Button className={classes.button} color="primary" variant="contained" startIcon={<Code size={16} />}>
              See code
            </Button>
            <Button className={classes.button} color="primary" variant="contained" startIcon={<Image size={16} />}>
              See mockups
            </Button>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              startIcon={<ExternalLink size={16} />}
            >
              Open the app
            </Button>
          </Box>
        </Box>
        <Typography className={classes.contentMain} variant="h5" color="textPrimary">
          Project description
        </Typography>
        <Typography className={classes.content} variant="body2" color="textSecondary">
          {props.contentMainDescription}
        </Typography>
        <Typography className={classes.contentMain} variant="h5" color="textPrimary">
          My role
        </Typography>
        <Typography className={classes.content} variant="body2" color="textSecondary">
          {props.contentMainRole}
        </Typography>
        <Typography className={classes.contentMain} variant="h5" color="textPrimary">
          Technologies
        </Typography>
        <Box className={classes.tags}>
          <Tag label="TypeScript" />
          <Tag label="React" />
          <Tag label="Redux" />
          <Tag label="Material UI"/>
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogTablet;
