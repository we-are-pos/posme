import React, { Component } from 'react'
import NavBar from '../../components/Navbar'
import Cart from '../../components/Cart'
import ImgMediaCard from "../../components/Card"
import CenteredTabs from '../../components/NavbarTab'
import axios from 'axios'

class Home extends Component {
  state = {
    tabs: [],
    items: []
  }

  handleGetTabs = _ => {
    axios.get(`/tab/${localStorage.getItem('company')}`)
      .then(({ data }) => {
        this.setState({ ...this.state, tabs: data })
      })
      .catch(e => console.log(e))
  }

  handleGetItems = _ => {
    axios.get('/item')
      .then(({ data }) => {
        this.setState({ ...this.state, items: data })
        console.log(this.state.items)
      })
      .catch(e => console.log(e))
  }

  render () {
    return (
      <div>
      <NavBar />
      <Cart />
      <CenteredTabs 
          tabs={this.state.tabs}
          handleGetItems={this.handleGetItems}
          handleGetTabs={this.handleGetTabs}
      />
      <ImgMediaCard 
          items={this.state.items}
          tabs={this.state.tabs}
          handleGetItems={this.handleGetItems} 
      />
      </div>
    )
  }
}

export default Home
