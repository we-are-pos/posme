import React from 'react'
import NavBar from '../../components/Navbar'
import AddTab from '../../components/AddTab'
import AddItem from '../../components/AddItem'
import Truck from '../../components/Truck'


class Inventory extends React.Component {
  render () {
    return (
      <div>
      <NavBar />
      <AddTab />
      <AddItem />
      <Truck />
      </div>
    )
  }
}

export default Inventory

