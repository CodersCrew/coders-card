import React, { useState, FC } from 'react';

import { IconButton } from '../IconButton/IconButton';
import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { Tag } from '../Tag/Tag';
import { DialogProps } from './PostDialog';

import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  paper: { minWidth: '500px' },
  buttons: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: 'red',
    padding: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    marginTop: theme.spacing(1, 2),
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

const DialogMobile: FC<DialogProps> = ({ ...props }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog scroll="paper" className={classes.wrapper} fullScreen={true} open={open} {...props}>
        <Box className={classes.buttons}>
          <Box className={classes.button}>
            <Box className={classes.rightButton}>
              <IconButton {...props} size={'small'}>
                <ChevronLeft size={15} />
              </IconButton>
            </Box>
            <IconButton {...props} size={'small'}>
              <ChevronRight size={15} />
            </IconButton>
          </Box>
          <IconButton {...props} size={'small'}>
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
          <Tag label="Teamwork" />
          <Typography className={classes.contentHeader} variant="body1" color="textSecondary">
            {props.contentHeader}
          </Typography>
        </Box>
        <Typography className={classes.content} variant="body2" color="textSecondary">
          {props.contentMain}
        </Typography>
      </Dialog>
    </Box>
  );
};

export default DialogMobile;
