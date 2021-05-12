import React from 'react';
import { Download } from 'react-feather';
import { Box, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { Button } from '@/components/Button';
import { transformImage } from '@/utils/image';

import type { DetailsCardVariantProps } from './DetailsCard.types';
import { DetailsItem } from './DetailsItem';
import { renderSocialMediaIcon } from './renderSocialMediaIcon';

const AVATAR_SIZE = 200;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: theme.spacing(14),
    background: 'transparent',
    minWidth: 280,
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 16,
    height: '100%',
    width: '100%',
    '& .MuiCardContent-root': {
      height: '100%',
    },
    '& .MuiCardContent-root:last-child': {
      padding: 0,
    },
    paddingTop: theme.spacing(11),
  },
  avatar: {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: theme.spacing(-12.5),
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: 16,
    boxShadow: theme.shadows[3],
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
  basicInfo: {
    padding: theme.spacing(2, 3, 3, 3),
    background: 'transparent',
  },
  moreInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: theme.palette.background.light,
    padding: theme.spacing(3, 3, 5, 3),
    width: '100%',
    height: '100%',
  },
  detailsItem: {
    marginBottom: theme.spacing(2),
  },
  detailsItemAvailable: {
    color: theme.palette.success.main,
  },
  name: {
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  position: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(0.75),
    textAlign: 'center',
  },
  link: {
    width: 21,
    height: 21,
    margin: theme.spacing(0, 1),
  },
  iconsWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(2.5),
  },
  icon: {
    boxSizing: 'border-box',
    background: theme.palette.text.secondary,
    fill: theme.palette.text.secondary,
    stroke: theme.palette.text.white,
    width: 21,
    height: 21,
    borderRadius: 3,
    padding: 3,
  },
  buttonWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    width: 158,
    height: 40,
    borderRadius: 8,
    boxShadow: theme.shadows[6],
  },
  resetAnchorStyle: {
    textDecoration: 'none',
    color: 'unset',
  },
}));

export const DetailsCardDesktop = ({
  fullName,
  image,
  position,
  socialMedia,
  phone,
  email,
  address,
  isFreelancer,
  resumeLink,
}: DetailsCardVariantProps) => {
  const classes = useStyles();

  const avatar = transformImage(image, { width: AVATAR_SIZE, height: AVATAR_SIZE });

  return (
    <Box className={classes.wrapper}>
      <Card className={classes.card}>
        <CardMedia className={classes.avatar} image={avatar} />
        <CardContent className={classes.content}>
          <Box className={classes.basicInfo}>
            <Box className={classes.name}>
              <Typography variant="h1">{fullName}</Typography>
            </Box>
            <Typography variant="subtitle1" className={classes.position}>
              {position}
            </Typography>
            {socialMedia && (
              <Box className={classes.iconsWrapper}>
                {socialMedia.map((media) =>
                  media.link ? (
                    <a className={classes.link} key={media.name} href={media.link} target="_blank" rel="noreferrer">
                      {renderSocialMediaIcon(media.name, classes.icon)}
                    </a>
                  ) : null,
                )}
              </Box>
            )}
          </Box>
          <Box className={classes.moreInfo}>
            {phone && (
              <DetailsItem
                className={`${classes.detailsItem} ${classes.resetAnchorStyle}`}
                label={phone}
                icon="phone"
                isLink
                href={`tel:${phone}`}
              />
            )}
            {email && (
              <DetailsItem
                className={`${classes.detailsItem} ${classes.resetAnchorStyle}`}
                label={email}
                icon="mail"
                isLink
                href={`mailto:${email}`}
              />
            )}
            {address && <DetailsItem className={classes.detailsItem} label={address} icon="map-pin" />}
            {isFreelancer && (
              <DetailsItem
                className={`${classes.detailsItem} ${classes.detailsItemAvailable}`}
                label="Available for freelance"
                icon="check"
              />
            )}
            {resumeLink && (
              <Box className={classes.buttonWrapper}>
                <Button
                  href={resumeLink}
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  startIcon={<Download size={16} />}
                >
                  Download CV
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
