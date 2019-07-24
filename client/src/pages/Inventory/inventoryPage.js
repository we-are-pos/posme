import React, { Component } from 'react'
import NavBar from '../../components/Navbar'
import AddTab from '../../components/AddTab'
import AddItem from '../../components/AddItem'
import Truck from '../../components/Truck'
import ImgMediaCard from "../../components/Card"
import CenteredTabs from '../../components/NavbarTab'
import axios from 'axios'

class Inventory extends Component {
  state = {
    _id: '',
    label: '',
    tabs: []
  }

  handleGetTabs = _ => {
    axios.get(`/tab/${localStorage.getItem('company')}`)
      .then(({ data }) => {
        this.setState({ ...this.state, tabs: data }) 
        console.log(this.state.tabs)
      })
      .catch(e => console.log(e))
  }

  // fetch items

  render() {
    return (
      <div>
        <NavBar />
        <AddTab />
        <CenteredTabs
          tabs={this.state.tabs}
          handleGetTabs={this.handleGetTabs}
        />
        <AddItem />
        <Truck />
        {/* {items.map(itemObj =>  {
        return <ImgMediaCard title={itemObj.title} />  
      })} */}
        <ImgMediaCard title='lolololol' />
      </div>
    )
  }
}

export default Inventory

