import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImgSrc() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <img src="https://techtipsall.com/wp-content/uploads/2023/12/techtips-logo.png"  alt="missing alt"/>
    </div>
  );
}
