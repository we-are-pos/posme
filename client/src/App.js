import React, { Component } from 'react'
import Calculator from './components/Calculator'
import Card from './components/Card'
import MediaCard from './components/Card';

class App extends Component {
  render () {
    return (
      <>
      <h1>We Are POSME</h1>
      <Calculator />
      <Card />
      </>
    )
  }
}

export default App
