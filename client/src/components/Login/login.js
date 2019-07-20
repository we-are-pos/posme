import React from 'react'
import PosmeLogo from './images/POSME.png'
import './login.css'
import TextField from '@material-ui/core/TextField'

const Login = props => {
  console.log(props)
  return (
    <>
      <img alt='logo' className='posme' src={PosmeLogo} />
      <h4 className='meaning'>Point Of Sale Made Easy</h4>
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
    </>
  )
}

export default Login

