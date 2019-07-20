import React, { Component } from 'react'
import Login from '../../components/Login'
import LoginAxios from '../../utils/Login'

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleLogInUser = event => {
    event.preventDefault()
    LoginAxios.login()
    this.setState({})
    console.log(this.state.username, this.state.password)
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
