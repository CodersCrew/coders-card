import React from 'react';
import { Download } from 'react-feather';
import { Box, Card, CardMedia, makeStyles, Typography } from '@material-ui/core/';

import { FC } from '../../typings/components';
import { Button } from '../Button';
import { CardProps } from './cardProps';
import { DetailsItem } from './DetailsItem';
import { renderSocialMediaIcon } from './renderSocialMediaIcon';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.background.paper,
    height: '100%',
    width: '100%',
    borderRadius: 16,
    padding: theme.spacing(0),
  },
  content: {
    height: '100%',
    width: '100%',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 16,
  },
  name: {
    marginTop: theme.spacing(2),
    width: '100%',
    textAlign: 'center',
  },
  position: {
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 0, 2.5, 0),
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgorund: 'transparent',
    minHeight: 224,
    padding: theme.spacing(3, 3, 0, 3),
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    height: '100%',
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
  iconsWrapper: {
    marginBottom: theme.spacing(3),
  },
  iconLink: {
    width: 21,
    height: 21,
    margin: theme.spacing(0, 1),
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
  resetAnchorStyle: {
    textDecoration: 'none',
    color: 'unset',
  },
  detailsItemAvailable: {
    color: theme.palette.success.main,
  },
  bottomSectionItem: {
    marginBottom: theme.spacing(2),
  },
  buttonWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    paddingTop: theme.spacing(1.5),
    marginTop: theme.spacing(1),
  },
  button: {
    width: 150,
    height: 32,
    borderRadius: 8,
    boxShadow: '0 2px 4px 0 rgba(47, 84, 235, 0.15), 0 8px 16px 0 rgba(47, 84, 235, 0.15)',
  },
}));
const CardMobile: FC<CardProps> = ({
  fullName,
  image,
  position,
  socialMedia,
  phone,
  email,
  address,
  isFreelancer,
  resumeLink,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box className={classes.content}>
        <Box className={classes.topSection}>
          <CardMedia className={classes.avatar} image={image} />
          <Typography className={classes.name} variant="h2">
            {fullName}
          </Typography>
          <Typography variant="subtitle1" className={classes.position}>
            {position}
          </Typography>
          <Box className={classes.iconsWrapper}>
            {socialMedia?.map((media) => (
              <a className={classes.iconLink} key={media.name} href={media.link}>
                {renderSocialMediaIcon(media.name, classes.icon)}
              </a>
            ))}
          </Box>
        </Box>
        <Box className={classes.bottomSection}>
          {phone && (
            <DetailsItem
              label={phone}
              icon="phone"
              className={`${classes.bottomSectionItem} ${classes.resetAnchorStyle}`}
              isLink
              href={`tel:${phone}`}
            />
          )}
          {email && (
            <DetailsItem
              className={`${classes.bottomSectionItem} ${classes.resetAnchorStyle}`}
              label={email}
              icon="mail"
              isLink
              href={`mailto:${email}`}
            />
          )}
          {address && <DetailsItem className={classes.bottomSectionItem} label={address} icon="map-pin" />}
          {isFreelancer && (
            <DetailsItem className={classes.detailsItemAvailable} label="Available for freelance" icon="check" />
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
      </Box>
    </Card>
  );
};

export default CardMobile;
