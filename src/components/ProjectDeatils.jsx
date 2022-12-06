import React from 'react'
import './Projects.css'


const ProjectDeatils = (props) => {
  return (

   
<div className="card card-1 bg-light fade-in-img" style={{width: "22rem",height:"16rem",marginLeft:"7rem",marginBottom:"40px"}}>
  <img src={props.Ui} className="card-img-top my-2" alt="project"/>
  <div className="card-body">
    <h6 className="card-text">{props.title}</h6>
    <p className='d-font'>{props.description}</p>
    <button type="button" className="btn   btn-dark">{props.iconDes} &#8594;<a href={props.link}  rel="noreferrer" target="_blank">{props.icon}</a></button>
  </div>
</div>


    
  )
}

export default ProjectDeatils
