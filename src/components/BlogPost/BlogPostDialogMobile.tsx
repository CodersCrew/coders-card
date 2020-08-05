import React, { FC } from 'react';

import { Tag } from '../Tag/Tag';
import { BlogPostDialogProps } from './BlogPostDialog';
import { IconButton } from '../IconButton/IconButton';

import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  buttons: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    marginTop: theme.spacing(1, 2),
    height: 180,
  },
  header: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(3),
  },
  wrapper: { boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)' },
  textHeader: { marginBottom: theme.spacing(0.5) },
  subtitle: { margin: theme.spacing(0.5, 0, 1, 0) },
  contentHeader: { marginTop: theme.spacing(2) },
  content: { padding: theme.spacing(3) },
  button: { display: 'flex' },
  rightButton: { marginRight: 15 },
}));

const BlogPostDialogMobile: FC<BlogPostDialogProps> = ({ isOpen, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} fullScreen={true} open={isOpen} {...props}>
        <Box className={classes.buttons}>
          <Box className={classes.button}>
            <Box className={classes.rightButton}>
              <IconButton color="inherit" {...props} size={'small'}>
                <ChevronLeft size={15} />
              </IconButton>
            </Box>
            <IconButton color="inherit" {...props} size={'small'}>
              <ChevronRight size={15} />
            </IconButton>
          </Box>
          <IconButton color="inherit" {...props} size={'small'}>
            <X size={15} />
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
          <Tag label="Teamwork" color="secondary" />
          <Typography className={classes.contentHeader} variant="body1" color="textSecondary">
            {props.contentheader}
          </Typography>
        </Box>
        <Typography className={classes.content} variant="body2" color="textSecondary">
          {props.contentmain}
        </Typography>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogMobile;
