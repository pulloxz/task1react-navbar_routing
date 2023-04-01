import React, { Component } from 'react';
// import HomePage from './homePage';
import { Link } from "react-router-dom"
import Logo from '/Users/fatimamuhammed/Desktop/taskone/src/imgs/—Pngtree—dental logo designcreative dentist logo_4817208.png'

class Navbar extends Component {
    
    state = {  }
    render() { 
        return (
             <div>
                
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
           
 
  <a className="navbar-brand" href="#">PatientHub  </a>
   <img src={Logo} alt='' width={30} height={30}></img>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
        <Link className="nav-link" to='services'>services </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='results'>results </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='shop'>shop </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/contactus'>contact us </Link>
      </li>
    </ul>
  </div>
</nav>

        </div> 

);

    }
}
 
export default Navbar ;

