import React, { Component } from 'react'
import NavBar from '../../components/Navbar'
import Cart from '../../components/Cart'
import ImgMediaCard from "../../components/Card"
import CenteredTabs from '../../components/NavbarTab'

class Home extends Component {
  render () {
    return (
      <div>
      <NavBar />
      <Cart />
      <CenteredTabs />
      <ImgMediaCard />
      </div>
    )
  }
}

export default Home
