import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { typography } from "@material-ui/system";
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import ShoppingBag from './images/icon_bag.svg'
import CardButton from '../CardButton'
import Calculator from '../Calculator'
 

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    width: 372,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  paymentButton: {
    width: 158,
    height: 80,
    backgroundColor: '#41C8E8',
    color: 'white',
    border: 'none',
    fontSize: 22,
  },
  plusButton: {
    marginLeft: 20,
    fontSize: 20,
    color: '#41C8E8',
    height: 50,
  },
  minusButton: {
    marginLeft: 40,
    fontSize: 20,
    color: '#41C8E8',
    height: 50,

  },
  countDisplay: {
    marginLeft: 120,
    // padding: 4,
    color: 'black',
    fontSize: 30,
    fontWeight: 'regular',
  },
  productName: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles()

  const [count, setCountState] = useState(0)
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }


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
          <img alt='bag' src={ShoppingBag} />
        </Box>
        <Divider />
        <typography className={classes.productName} >Product Name</typography>
          <Box
          display="flex"
          flexWrap="wrap"
          alignContent="center"
          css={{ height: 70 }}
          >
            <Button className={classes.plusButton} onClick={_ => {setCountState(count + 1)}} variant="outlined" size="small">+</Button>
            <Button className={classes.minusButton} onClick={_ => {setCountState(count -1)}} variant="outlined" size="small">–</Button>
            <typography className={classes.countDisplay}>{count}</typography>
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
          <Button className={classes.paymentButton} variant="outlined" color="primary" onClick={handleClickOpen}>
          CASH
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button className={classes.paymentButton} variant="outlined" color="primary">
          CARD
          </Button>
          {/* <CashButton onClick={handleClickOpen} /> */}
          <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
        <Calculator />

        </DialogContent>
        
      </Dialog>
          </Grid >
        </Grid>
        </Box>
      </Drawer>
      </grid>
    </div>
  )
}
