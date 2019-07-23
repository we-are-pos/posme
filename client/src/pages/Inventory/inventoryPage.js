import React, { Component } from 'react'
import NavBar from '../../components/Navbar'
import AddTab from '../../components/AddTab'
import AddItem from '../../components/AddItem'
import ImgMediaCard from "../../components/Card"
import CenteredTabs from '../../components/NavbarTab'

class Inventory extends Component {
  render () {
    return (
      <div>
      <NavBar />
      <AddTab />
      <CenteredTabs />
      <AddItem />
      <ImgMediaCard />
      </div>
    )
  }
}

export default Inventory

