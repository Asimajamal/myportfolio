import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top  ">
  <div className="container-fluid" >
    <p className="text-light portfolio">Port<span className='text-warning'>folio</span></p>
    <button class="navbar-toggler  resp-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"></div>
   
    <div className="collapse navbar-collapse "  id="navbarSupportedContent">
      <ul className="navbar-nav nav-tabs me-auto mb-1 mb-lg-0 " >
        

        <li className="nav-item mx-3  ">
          <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item mx-3">
          <Link className="nav-link  text-light "  to="/Skills">Skills</Link>
        </li>
        {/* <li class="nav-item dropdown  mx-3">
          <Link class="nav-link dropdown-toggle text-light"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Projects
          </Link>
          <ul class="dropdown-menu bg-dark text-light" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item " to="/Projects">Projects</Link></li>
            <li><Link class="dropdown-item " to="/ReactProjects">React js</Link></li>
            
            <li><Link class="dropdown-item" to="WordpressProjects">WordPress</Link></li>
            <li><Link class="dropdown-item " to="UIProjects">UI/UX</Link></li>
          </ul>
        </li> */}
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
