import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import ThankYouPage from './pages/ThankYou'
import Inventory from './pages/Inventory'
import Sales from './pages/Sales'
import Home from './pages/Home'
// import ThankYou from './components/ThankYou'
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Login} />
          <Route path='/inventory' exact component={Inventory} />
          <Route path='/thankyou' component={ThankYouPage} />
          <Route path='/sales' component={Sales} />
          <Route path='/home' component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
