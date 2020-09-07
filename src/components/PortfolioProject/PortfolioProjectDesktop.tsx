import React, { FC } from 'react';

import { PortfolioProjectDialogProps } from './PortfolioProject';
import { IconButton } from '../IconButton/IconButton';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

import { X, ChevronLeft, ChevronRight, Code, Image, ExternalLink } from 'react-feather';
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
  tags: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    padding: theme.spacing(0, 3, 3, 3),
    '& > *': {
      margin: theme.spacing(0.5, 1, 0.5, 0),
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'normal',
    margin: theme.spacing(1, 1, 1, 0),
  },
  img: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
    height: 'auto',
  },
  headerTitle: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    marginBottom: theme.spacing(0.5),
  },
  headerContent: { marginTop: theme.spacing(1.5) },
  content: { paddingRight: theme.spacing(3), paddingLeft: theme.spacing(3) },
  contentMain: { padding: theme.spacing(3, 3, 1.5, 3) },
}));

const BlogPostDialogDesktop: FC<PortfolioProjectDialogProps> = (props) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={props.isOpen}>
        <Box position="absolute" left="620px">
          <Box mt={2} mb={5}>
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
            <Tag label="Mobile app" color="default" />
          </Box>
          <Typography variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Typography className={classes.headerContent} variant="body1" color="textSecondary">
            {props.contentHeader}
          </Typography>
          <Box display="flex">
            <Button
              href={props.codeUrl}
              className={classes.button}
              color="primary"
              variant="contained"
              startIcon={<Code size={16} />}
            >
              See code
            </Button>
            <Button
              href={props.mockupsUrl}
              className={classes.button}
              color="primary"
              variant="contained"
              startIcon={<Image size={16} />}
            >
              See mockups
            </Button>
            <Button
              href={props.projectUrl}
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
          {props.tags.map((tag, index) => (
            <Tag key={`${tag.name}-${index}`} label={tag.name} />
          ))}
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogDesktop;
