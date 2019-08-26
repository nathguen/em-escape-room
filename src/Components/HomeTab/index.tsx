import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

buttonClicked = () => {

}

export default function HomeTab() {
  const classes = useStyles();
  return (

    <div>
      <p>
        Welcome to the Relief Society Room! Unfortunately, you cannot leave here until some tasks have been completed. Of course, I’m not actually going to lock you in and you can come and go as you please, but try to use a little imagination and at least pretend like you’re stuck here.
      </p>
      <div className="align-left">
        <Button onClick={() => this.buttonClicked} variant="contained" color="primary" className={classes.button}>
          Laptop Use
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Laptop Rules
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Room Rules
        </Button>
      </div>
    </div>
  );
}