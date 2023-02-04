import React from 'react'
import ProjectContent from './ProjectContent';



import {
    FaReact, FaWordpress,FaUikit
   
  } from "react-icons/fa";
  import  './ProjectContent.css'
const Projects = () => {
  return (
<div className="container " >
   
      <div className='wrapper '>
      <ProjectContent className="react" title="React js Projects" text="07" icon={<FaReact/>} project="/ReactProjects"/>
      <ProjectContent className="Wordpress" title="WordPress Projects " text="02" icon={<FaWordpress/>} project="/WordpressProjects"/>
      <ProjectContent className="UI" title="UI/UX Projects" text="02" icon={<FaUikit/>} project="/UIProjects"/>
      {/* <ProjectContent className="UI" title="UI/UX Projects" text="06" icon={<FaUikit/>} project="/UIProjects"/> */}
      </div>
      </div>
      
  )
}

export default Projects
