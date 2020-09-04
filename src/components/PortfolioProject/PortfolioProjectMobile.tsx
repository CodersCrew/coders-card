import React, { FC } from 'react';

import { Tag } from '../Tag/Tag';
import { PortfolioProjectDialogProps } from './PortfolioProject';
import { IconButton } from '../IconButton/IconButton';
import { Button } from '../Button/Button';

import { X, ChevronLeft, ChevronRight, Code, Image, ExternalLink } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  iconButtons: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.4,
  },
  img: {
    marginTop: theme.spacing(1, 2),
    width: '100%',
    height: 'auto',
  },
  wrapper: { boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)' },
  textHeader: { marginBottom: theme.spacing(0.5) },
  subtitle: { margin: theme.spacing(0.5, 0, 1, 0) },
  contentHeader: { margin: theme.spacing(2, 0, 2) },
  content: { paddingRight: theme.spacing(3), paddingLeft: theme.spacing(3) },
  contentMain: { padding: theme.spacing(3, 3, 1.5, 3) },
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
}));

const BlogPostDialogMobile: FC<PortfolioProjectDialogProps> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} fullScreen={true} open={props.isOpen}>
        <Box className={classes.iconButtons}>
          <Box display="flex">
            <Box mr="15px">
              <IconButton color="inherit" onClick={props.handlePrev} size={'small'}>
                <ChevronLeft size={20} />
              </IconButton>
            </Box>
            <IconButton color="inherit" onClick={props.handleNext} size={'small'}>
              <ChevronRight size={20} />
            </IconButton>
          </Box>
          <IconButton color="inherit" onClick={props.handleClose} size={'small'}>
            <X size={20} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} />
        <Box bgcolor="background.light" p={3}>
          <Typography className={classes.textHeader} variant="h4" color="textPrimary">
            {props.title}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Tag label="Mobile app" color="primary" />
          <Typography className={classes.contentHeader} variant="body1" color="textSecondary">
            {props.contentHeader}
          </Typography>
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

export default BlogPostDialogMobile;
