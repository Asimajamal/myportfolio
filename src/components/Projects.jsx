import React from 'react'
import ProjectDeatils from './ProjectDeatils'
import Ui from './Ui.PNG'
import Ui2 from './Ui2.PNG'
import portfolio from './portfolio.PNG'
import News from './News app.PNG'
import Textutil from './Textutil.PNG'
import Youtube from './Youtube.png'
import wordpress from './wordpress.png'
import Movie from './Movie.PNG'
import Ecommerce from './Ecommerce.png'
import {
    FaBehance, FaGithub,FaWordpress
   
  } from "react-icons/fa";

const Projects = () => {
  return (

    <div className="container-fluid  wrapper ">
    <div className="row ">
      <ProjectDeatils Ui={portfolio} title="Portfolio Website" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/myportfolio" description="Created using HTML Css React Js & Bootstrap" iconDes="Source Code"/>
      <ProjectDeatils Ui={News} title="News App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/news-app" description="Created using HTML React Js & Bootstrap" iconDes="Source Code"/>
      <ProjectDeatils Ui={Textutil} title="TextUtils App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/github/tree/master/src/components" description="Created using HTML React Js & Bootstrap" iconDes="Source Code"/>
      <ProjectDeatils Ui={Youtube} title="Youtube Playlist App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/Youtube" description="Created using HTML & React Js" iconDes="Source Code"/>
      <ProjectDeatils Ui={Ui} title="Covid-19 Web-UI Design" icon={<FaBehance/>} link="https://www.behance.net/gallery/149769199/Website-UI-Design" description="Created using Figma" iconDes="See here"/>
      <ProjectDeatils Ui={Ui2} title="Hospital-Dashboard UI Design" icon={<FaBehance/>} link="https://www.behance.net/gallery/147205743/Dashboard-UI-Design" description="Created using Figma" iconDes="See here"/>
      <ProjectDeatils Ui={Ecommerce} title="Ecommerce-Website" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/ecommerce" description="Created using HTML Bootstrap & React Js" iconDes="Source Code"/>
      <ProjectDeatils Ui={Movie} title="Movie-Search-App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/context-api" description="Created using HTML Css & React Js" iconDes="Source Code"/>
      <ProjectDeatils Ui={wordpress} title="Ecommerce-Store" icon={<FaWordpress/>} link="http://wordpressshop.epizy.com/" description="Created using Wordpress" iconDes="See here"/>
      
    </div>
    </div>
  )
}

export default Projects
