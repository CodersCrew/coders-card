import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, X } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core';
import marked from 'marked';

import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { StaticIcon } from '@/components/StaticIcon';
import { Tag } from '@/components/Tag';
import { transformImage } from '@/utils/image';

import type { PortfolioProjectDialogVariantProps } from './PortfolioProjectDialog.types';

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
  wrapper: { boxShadow: theme.shadows[1] },
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

export const PortfolioProjectDialogMobile = (props: PortfolioProjectDialogVariantProps) => {
  const classes = useStyles();

  const description = useMemo(() => marked(props.contentMainDescription), [props.contentMainDescription]);
  const role = useMemo(() => marked(props.contentMainRole), [props.contentMainRole]);

  const projectImage = transformImage(props.imageUrl, { width: 600, height: 336 });

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} fullScreen open={props.isOpen}>
        <Box className={classes.iconButtons}>
          <Box display="flex">
            <Box mr="15px">
              <IconButton color="inherit" onClick={props.handlePrev} size="small">
                <ChevronLeft size={20} />
              </IconButton>
            </Box>
            <IconButton color="inherit" onClick={props.handleNext} size="small">
              <ChevronRight size={20} />
            </IconButton>
          </Box>
          <IconButton color="inherit" onClick={props.handleClose} size="small">
            <X size={20} />
          </IconButton>
        </Box>
        <img className={classes.img} src={projectImage} alt={props.title} />
        {props.buttons.length > 0 && (
          <Box display="flex">
            {props.buttons.map(({ name, icon, url }) => (
              <Button
                key={name}
                href={url}
                className={classes.button}
                color="primary"
                variant="contained"
                startIcon={<StaticIcon icon={icon} size={16} />}
              >
                {name}
              </Button>
            ))}
          </Box>
        )}
        <Typography className={classes.contentMain} variant="h5" color="textPrimary">
          Project description
        </Typography>
        <Typography
          className={classes.content}
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Typography className={classes.contentMain} variant="h5" color="textPrimary">
          My role
        </Typography>
        <Typography
          className={classes.content}
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: role }}
        />
        <Typography className={classes.contentMain} variant="h5" color="textPrimary">
          Technologies
        </Typography>
        <Box className={classes.tags}>
          {props.tags.map((tag) => (
            <Tag key={tag.name} label={tag.name} />
          ))}
        </Box>
      </Dialog>
    </Box>
  );
};
