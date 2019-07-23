import React from 'react'
import NavBar from '../../components/Navbar'
import Cart from '../../components/Cart'

class Home extends React.Component {
  render () {
    return (
      <div>
      <NavBar />
      <Cart />
      </div>
    )
  }
}

export default Home
