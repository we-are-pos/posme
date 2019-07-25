import React from 'react'
import PosmeLogo from './images/PosmeLogo.png'
import './login.css'
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"

const Login = props => {
  return (
    <>       
    
      <img alt='logo' className='posme' src={PosmeLogo} />
      {/* <h4 className='meaning'>Point Of Sale Made Easy</h4> */}
      
      <Grid container spacing={0}>
      <Grid item xs={12}>
      <form className='form-input' >
        <TextField
          id='username'
          label='Username'
          className='username-input'
          type='username'
          autoComplete='username'
          margin='normal'
          variant='outlined'
          onChange={props.handleInputChange}
          value={props.username}
        />
  
        <TextField
          id='password'
          label='Password'
          className='username-input'
          type='password'
          autoComplete='current-password'
          margin='normal'
          variant='outlined'
          onChange={props.handleInputChange}
          value={props.password}
        />
        <div>
          <button
            className='login'
            type='button'
            name='data'
            onClick={props.handleLogInUser}
          >
            LOGIN
          </button>
        </div>
      </form>
      </Grid>
      </Grid>
    </>
  )
}

export default Login

