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
  header: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(3),
  },
  wrapper: { boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)' },
  textHeader: { marginBottom: theme.spacing(0.5) },
  subtitle: { margin: theme.spacing(0.5, 0, 1, 0) },
  contentHeader: { margin: theme.spacing(2, 0, 2) },
  content: { paddingRight: theme.spacing(3), paddingLeft: theme.spacing(3) },
  contentMain: { padding: theme.spacing(3, 3, 1.5, 3) },
  iconButton: { display: 'flex' },
  tags: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    padding: theme.spacing(0, 3, 3, 3),
    '& > *': {
      margin: theme.spacing(0.5, 1, 0.5, 0),
    },
  },
  iconRightButton: { marginRight: 15 },
  button: {
    display: 'flex',
    justifyContent: 'normal',
    margin: theme.spacing(1, 1, 1, 0),
  },
  mainTag: {
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '4px',
    height: '24px',
    color: theme.palette.text.white,
  },
}));

const BlogPostDialogMobile: FC<PortfolioProjectDialogProps> = ({ isOpen, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} fullScreen={true} open={isOpen} {...props}>
        <Box className={classes.iconButtons}>
          <Box className={classes.iconButton}>
            <Box className={classes.iconRightButton}>
              <IconButton color="inherit" {...props} size={'small'}>
                <ChevronLeft size={20} />
              </IconButton>
            </Box>
            <IconButton color="inherit" {...props} size={'small'}>
              <ChevronRight size={20} />
            </IconButton>
          </Box>
          <IconButton color="inherit" {...props} size={'small'}>
            <X size={20} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} />
        <Box className={classes.header}>
          <Typography className={classes.textHeader} variant="h4" color="textPrimary">
            {props.title}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Tag label="Mobile app" color="default" className={classes.mainTag} />
          <Typography className={classes.contentHeader} variant="body1" color="textSecondary">
            {props.contentHeader}
          </Typography>
          <Button className={classes.button} color="primary" variant="contained" startIcon={<Code size={16} />}>
            See code
          </Button>
          <Button className={classes.button} color="primary" variant="contained" startIcon={<Image size={16} />}>
            See mockups
          </Button>
          <Button className={classes.button} color="primary" variant="contained" startIcon={<ExternalLink size={16} />}>
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
          <Tag label="TypeScript" color="secondary" />
          <Tag label="React" color="secondary" />
          <Tag label="Redux" color="secondary" />
          <Tag label="Material UI" color="secondary" />
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogMobile;
