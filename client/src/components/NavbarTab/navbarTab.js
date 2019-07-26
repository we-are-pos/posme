// import React, { useState, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import ItemCardList from '../Card'

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//     },
// })


// export default function CenteredTabs(props) {
//     const classes = useStyles()
//     const [value, setValue] = useState(0)
//     const [tabId, setTabId] = useState(0)


//     useEffect(() => {
//         props.handleGetTabs({})
//     }, [])

//     function handleChange(event, newValue) {
//         setTabId(event.currentTarget.id)
//         setValue(newValue)
//     }

//     return (
//         <Paper className={classes.root}>
//             <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 onClick={props.handleGetTabs}
//                 indicatorColor="primary"
//                 textColor="primary"
//             >
//                 {props.tabs.map((tabs, i) => {
//                     return <Tab id={tabs._id} label={tabs.name} />
//                 })}
//             </Tabs>
//             {
//                 <ItemCardList
//                     items={props.items.filter(x => x.tab === tabId)}
//                     tabs={props.tabs}
//                     handleGetTabs={props.handleGetTabs}
//                 />}
//         </Paper>
//     );
// }



import React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 999,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mini Succulents" {...a11yProps(0)} />
          <Tab label="Arrangements" {...a11yProps(1)} />
          <Tab label="Hens & Chicks" {...a11yProps(2)} />
          <Tab label="Wild Flowers" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews */}
        {/* axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
        place " mini Succulents image here"

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        place " Arrangements image here"

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        place " Hens and Chicks  image here"

        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        place "  Wild Flowers image here"
        </TabPanel>
      {/* </SwipeableViews> */}
    </div>
  );
}
