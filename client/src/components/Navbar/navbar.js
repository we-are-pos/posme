import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import Menu from '@material-ui/icons/MoreHoriz'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  root2: {
    display: 'flex',
  },

  paper: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  navBar: {
    width: 994,
    backgroundColor: '#4E5152',
  },
  list: {
    width: 350,
    height: 500,
  },
  fullList: {
    width: 'auto',
  },

}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    isLoggedIn: false,
    companyId: localStorage.getItem('company'),
    companyName: ''
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'Inventory', 'Sales', 'Sign Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

    </div>
  );


  useEffect(_ => {
    axios.post('/verify', {}, {
      headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }

    })
      .then(_ => {
        axios.get(`/company/${state.companyId}`)
          .then(({ data }) => {
          setState({ ...state, isLoggedIn: true, companyName: data.name })})
          .catch(e => console.log(e))

      })
      .catch(_ => {
        setState({ ...state, isLoggedIn: false, user: '' })
        window.location.href = '/'
      })
  }, [])

  return (
    <>
      <div className={classes.root}>

        {/* app bar */}
        <AppBar className={classes.navBar} position="static" >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <Button onClick={toggleDrawer('left', true)}>
                {/* <Menu  className={classes.menuButton} />   */}
              </Button>
              <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
              </Drawer>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {state.companyName}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>


      {/* app bar end */}


    </>
  );
}
