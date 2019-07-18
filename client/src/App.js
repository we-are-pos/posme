import React, { Component } from 'react'
import Login from './components/Login'
import ThankYou from './components/ThankYou'

class App extends Component {
  render () {
    return (
      <>
        {/* <h1>We Are POSME</h1> */}
        <Login />
        <ThankYou />
      </>
    )
  }
}

export default App
