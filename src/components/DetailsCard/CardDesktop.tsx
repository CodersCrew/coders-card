import React from 'react';
import { Download } from 'react-feather';
import { Box, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core/';

import { FC } from '../../typings/components';
import { Button } from '../Button';
import { CardProps } from './cardProps';
import { DetailsItem } from './DetailsItem';
import { renderSocialMediaIcon } from './renderSocialMediaIcon';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing(14),
    background: 'transparent',
    minWidth: 280,
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
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
    width: 200,
    height: 200,
    borderRadius: 16,
    boxShadow: '0px 10px 40px -10px rgba(0,0,0,0.2)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
  basicInfo: {
    background: 'transparent',
    height: '100%',
  },
  moreInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    background: theme.palette.background.light,
    padding: theme.spacing(3),
    minHeight: 268,
    width: '100%',
  },
  detailsItem: {
    marginBottom: theme.spacing(2),
  },
  detailsItemAvailable: {
    color: theme.palette.success.main,
  },
  name: {
    paddingTop: theme.spacing(2),
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
    paddingTop: theme.spacing(1.5),
  },
  button: {
    width: 158,
    height: 40,
    borderRadius: 8,
    boxShadow: '0 2px 4px 0 rgba(47, 84, 235, 0.15), 0 8px 16px 0 rgba(47, 84, 235, 0.15)',
  },
  resetAnchorStyle: {
    textDecoration: 'none',
    color: 'unset',
  },
}));

const CardDesktop: FC<{ data: CardProps }> = ({ data }) => {
  const classes = useStyles();
  const { fullName, image, position, socialMedia, phone, email, address, isFreelancer, resumeLink }: CardProps = data;

  return (
    <Box className={classes.wrapper}>
      <Card className={classes.card}>
        <CardMedia className={classes.avatar} image={image} />
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

export default CardDesktop;
