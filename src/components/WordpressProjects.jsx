import React from 'react'


import ProjectDeatils from './ProjectDeatils'

import CV from './CV.jpeg'
import wordpress from './wordpress.png'


import {
FaWordpress
   
  } from "react-icons/fa";

const WordpressProjects = () => {
  return (

    <div className="container-fluid  wrapper ">
    <div className="row ">
     
      <ProjectDeatils Ui={wordpress} title="Ecommerce-Store" icon={<FaWordpress/>} link="http://wordpressshop.epizy.com/" description="Created using Plugins WooCommerce & Elementor" iconDes="Demo here"/>
      <ProjectDeatils Ui={CV} title="CV Builder Landing Page UI" icon={<FaWordpress/>} link="http://asmajamalcvmaker.epizy.com/" description="Created using Wordpress Elementor" iconDes="Demo here"/>
      
    </div>
    </div>
  )
}

export default WordpressProjects
