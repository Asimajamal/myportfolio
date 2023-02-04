import React from 'react'
import { Link } from 'react-router-dom';


const ProjectContent = (props) => {
  return (
   <Link to={props.project} ><div class="card card-pro  mb-5 text-light   fade-in-img" >
  
   <div className={`col-md-4 my-4 ${props.className}`} >
     {props.icon}
   </div>
   <div class="col-md-8 text-center mx-5 ">
     <div class="card-body ">
       <h5 class="card-title text-warning ">{props.title}</h5>
       <p class="card-text text-muted">{props.text} Projectss</p>
       {/* <Link to={props.project} class="btn btn-light text-dark">Projects</Link> */}
     </div>
   </div>
 </div></Link>

    
 
  )
}

export default ProjectContent
