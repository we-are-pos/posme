import React from 'react'
import NavBar from '../../components/Navbar'
import AddTab from '../../components/AddTab'
import AddItem from '../../components/AddItem'


class Inventory extends React.Component {
  render () {
    return (
      <div>
      <NavBar />
      <AddTab />
      <AddItem />
      </div>
    )
  }
}

export default Inventory

