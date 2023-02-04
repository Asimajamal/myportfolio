import React from 'react'


import ProjectDeatils from './ProjectDeatils'
import Ui from './Ui.PNG'
import Ui2 from './Ui2.PNG'




import {
    FaBehance
   
  } from "react-icons/fa";

const UIProjects = () => {
  return (

    <div className="container-fluid  wrapper ">
    <div className="row ">
      
      <ProjectDeatils Ui={Ui} title="Covid-19 Web-UI Design" icon={<FaBehance/>} link="https://www.behance.net/gallery/149769199/Website-UI-Design" description="Created using Figma" iconDes="Demo here"/>
      <ProjectDeatils Ui={Ui2} title="Hospital-Dashboard UI Design" icon={<FaBehance/>} link="https://www.behance.net/gallery/147205743/Dashboard-UI-Design" description="Created using Figma" iconDes="Demo here"/>
      
      
    </div>
    </div>
  )
}

export default UIProjects
