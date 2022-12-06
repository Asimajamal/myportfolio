import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top  ">
  <div className="container-fluid" >
    <h2 className="text-light portfolio">Port<span className='text-warning'>folio</span></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"></div>
   
    <div className="collapse navbar-collapse "  id="navbarSupportedContent">
      <ul className="navbar-nav nav-tabs me-auto mb-1 mb-lg-0 " >
        

        <li className="nav-item mx-3 ">
          <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item mx-3">
          <Link className="nav-link  text-light "  to="/Skills">Skills</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link  text-light"  to="/Projects">Projects</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link  text-light"  to="/Education">Education</Link>
        </li>
        
       
        
        
      </ul>
     
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
