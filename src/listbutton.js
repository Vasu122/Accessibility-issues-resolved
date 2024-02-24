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

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" aria-label="click to read more">
        read more
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons" aria-label="click to next proceed">
        Next
      </Button>
    </div>
  );
}
