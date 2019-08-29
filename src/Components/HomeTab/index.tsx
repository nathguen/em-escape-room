import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Switch, } from '@material-ui/core';



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


export default function HomeTab() {
  const [state, setState2] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false
  });
  const classes = useStyles();

  const handleChange1 = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState2({ ...state, [name]: event.target.checked });
  };




  return (

    <div>
      <p>
        Welcome to the Relief Society Room! Unfortunately, you cannot leave here until some tasks have been completed. Of course, I’m not actually going to lock you in and you can come and go as you please, but try to use a little imagination and at least pretend like you’re stuck here.
      </p>
      <div className="center">
        <Button variant="contained" color="primary">
          <Switch
            checked={state.checkedA}
            onChange={handleChange1('checkedA')}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          Laptop Use
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <Switch
            checked={state.checkedB}
            onChange={handleChange1('checkedB')}
            value="checkedB"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          Laptop Rules
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <Switch
            checked={state.checkedC}
            onChange={handleChange1('checkedC')}
            value="checkedC"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          Room Rules
        </Button>


        {state.checkedA && (
          <div>
            <p>On this web page, you’ll notice several tabs that are labeled: “Piano”, “Emotional Strings”, “Uchtdorf”, “Cards”, and “Missionary”. Once you solve these puzzles around the room, you will input the answers into their respective slots to receive further instruction.</p>
          </div>
        )}
        {state.checkedB && (
          <div>
            <p>Be nice to Laptop</p>
          </div>
        )}
        {state.checkedC && (
          <div>
            <p>Can't leave till finished!</p>
          </div>
        )}
      </div>
    </div>
  );
}