import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeTab from '../HomeTab';
import PianoTab from '../PianoTab';
import EmotionalTab from '../EmotionalTab';
import CardsTab from '../CardsTab';
import MissionaryTab from '../MissionaryTab';


interface TabPanelProps {
  children: any;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles({});
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Piano" {...a11yProps(1)} />
          <Tab label="Emotional Strings" {...a11yProps(2)} />
          <Tab label="Uchtdorf" {...a11yProps(3)} />
          <Tab label="Cards" {...a11yProps(4)} />
          <Tab label="Missionary" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomeTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PianoTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmotionalTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CardsTab />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <MissionaryTab />
      </TabPanel>
    </div>
  );
}