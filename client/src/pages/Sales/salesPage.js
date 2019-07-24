import React from "react";
import NavBar from '../../components/Navbar'
import SalesImage from './images/Group_90.png'
import './salesPage.css'




class Home extends React.Component {
  render () {


    return (
      <div>
      <NavBar />
      <img alt='salesImage' className='salesImage' src={SalesImage} />
      </div>
    )
  }
}

export default Home;
