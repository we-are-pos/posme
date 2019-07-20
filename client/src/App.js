import React, { Component } from 'react'
import Calculator from './components/Calculator/calculator'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import ThankYou from './pages/ThankYouPage'
import Inventory from './pages/Inventory'
import Sales from './pages/Sales'
import Home from './pages/Home'
import Truck from './components/Truck'
import ThankYouPage from './components/ThankYou';

class App extends Component {
  render () {
    return (
      <>
      <Truck />
        <Router>
          <div>
            <Route path='/' exact component={Login} />
            <Route path='/inventory' component={Inventory} />
            <Route path='/thankyou' component={ThankYouPage} />
            <Route path='/sales' component={Sales} />
            <Route path='/home' component={Home} />
          </div>
        </Router>
      </>
    )
  }
}

export default App
