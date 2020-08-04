import React, { useState, FC } from 'react';
import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { DialogProps } from './PostDialog';

import { IconButton } from '../IconButton/IconButton';
import { Tag } from '../Tag/Tag';

import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
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
    marginLeft: theme.spacing(0),
    boxShadow: 'null',
  },
  buttonX: {
    marginBottom: theme.spacing(5),
    boxShadow: 'null',
  },
  buttonChevronLeft: {
    marginBottom: theme.spacing(2.5),
    boxShadow: 'null',
  },
  header: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(3),
    boxShadow: 'null',
  },
  img: { borderTopLeftRadius: 15, borderTopRightRadius: 15, boxShadow: 'null' },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(0.6),
    boxShadow: 'null',
  },
  headerContent: { marginTop: theme.spacing(1.5), boxShadow: 'null' },
  content: { padding: theme.spacing(3), overflowY: 'auto', boxShadow: 'null' },
}));

const DialogDesktop: FC<DialogProps> = ({ ...props }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} open={open} {...props}>
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
            <Tag label="Teamwork" />
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
            {props.contentMain}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DialogDesktop;
