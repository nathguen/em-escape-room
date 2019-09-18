import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    colorb: {
      color: 'blue'
    },
    colorp: {
      color: 'purple'
    },
    colorg: {
      color: 'green'
    }
  }),
);


export default function HomeTab() {
  const classes = useStyles();

  return (

    <div>
      <p>
        Welcome to the Relief Society Room! Unfortunately, you cannot leave here until some tasks have been completed. Of course, I’m not actually going to lock you in and you can come and go as you please, but try to use a little imagination and at least pretend like you’re stuck here.
      </p>
      <div className="center">
        <ExpansionPanel >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.colorb}
          >
            <Typography className={classes.heading}>Laptop Use</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              On this web page, you’ll notice several tabs that are labeled: “Piano”, “Emotional Strings”, “Uchtdorf”, “Cards”, and “Missionary”. Once you solve these puzzles around the room, you will input the answers into their respective slots to receive further instruction.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.colorp}
          >
            <Typography className={classes.heading}>Laptop Rules</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This laptop is not to be used to look up information on the internet.
              Stay on the “Escape the Relief Society Room” web pages only.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.colorg}
          >
            <Typography className={classes.heading}>Room Rules</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Please be aware of labels! There are many boxes in the room and for most of them a task needs to be completed before you can open the box.
              There are many things posted around the room using pushpins. Anything that has been put up with white or black pushpins, please do not remove them they need to stay put. Any other color is free game and you can move them around or remove them altogether as you see fit.
              You can use the clipboards, pencils, and scratch paper to take notes.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}