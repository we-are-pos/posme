import React from 'react'
import PosmeLogo from './images/POSME.png'
import './loginPage.css'
import TextField from '@material-ui/core/TextField'
const LoginPage = _ => {
  return (
    <>
      <img alt='logo' className='posme' src={PosmeLogo} />
      <h4 className='meaning'>Point Of Sale Made Easy</h4>
      <form className='form-input' >
        <TextField
          label='Username'
          className='username-input'
          type='username'
          autoComplete='username'
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='Password'
          className='username-input'
          type='password'
          autoComplete='current-password'
          margin='normal'
          variant='outlined'
        />
        <div>
          <button
            className='login'
            type='button'
            name='data' >
            LOGIN
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginPage
