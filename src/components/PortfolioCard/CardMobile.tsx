import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardProps } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 5,
    backgroundColor: 'blue',
    color: 'white',
  },
});

type Props = CardProps;

const CardMobile: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>hello im card mobile</CardContent>
    </Card>
  );
};

export default CardMobile;
