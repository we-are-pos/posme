import React, { Component } from 'react'
import Login from '../../components/Login'
import axios from 'axios'


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false
  }

  handleLogInUser = event => {
    event.preventDefault()
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(({ data }) => {
        if (data.isLoggedIn) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('company', data.company)
          localStorage.setItem('user', data.user)
          this.setState({ ...this.state, isLoggedIn: data.isLoggedIn })
          window.location.href = '/home'
      } else {
          this.setState({ ...this.state, isLoggedIn: false, username: '', password: '' })
        }
    })
      .catch(e => console.log(e))

  }

handleInputChange = event => {
  event.preventDefault()
  this.setState({
    [event.target.id]: event.target.value
  })
}

render() {
  return (
    <Login
      username={this.state.username}
      password={this.state.password}
      handleInputChange={e => this.handleInputChange(e)}
      handleLogInUser={e => this.handleLogInUser(e)}
    />
  )
}
}

export default LoginPage
