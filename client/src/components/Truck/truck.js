import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { typography } from "@material-ui/system";
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import CardButton from '../CardButton'
import CashButton from '../CashButton'
import Truck from '../../assets/truck.png'
 
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <grid>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <Box 
        display="flex"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="center"
        borderBottom={1}
        borderColor="grey.300"
        css={{ height: 70}}
        >
          <img alt='truck' src={Truck} />
        </Box>
        <Divider />
        <typography>Product Name</typography>
          <Box
          display="flex"
          flexWrap="wrap"
          alignContent="center"
          css={{ height: 70 }}
          >
            <Button variant="outlined" size="small">+</Button>
            <Button variant="outlined" size="small">-</Button>
            <typography></typography>
          </Box>
        <Divider />
        <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-end"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ height: 800 }}
        >
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <CardButton />
          </Grid>
          <Grid item xs={6}>
          <CashButton />
          </Grid >
        </Grid>
        </Box>
      </Drawer>
      </grid>
    </div>
  )
}
