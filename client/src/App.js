import React, { Component } from 'react'
import MediaCard from './components/Card';
import Login from './components/Login'


class App extends Component {
  render () {
    return (
      <>
      <h1>We Are POSME</h1>
      {/* <h1>We Are POSME</h1> */}
      <Login />
      </>
    )
  }
}

export default App
