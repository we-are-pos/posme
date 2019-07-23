import React, { Component } from 'react'
import NavBar from '../../components/Navbar'
import ImgMediaCard from "../../components/Card"
import CenteredTabs from '../../components/NavbarTab'

class Home extends Component {
  render () {
    return (
      <div>
      <NavBar />
      <CenteredTabs />
      <ImgMediaCard />
      </div>
    )
  }
}

export default Home
