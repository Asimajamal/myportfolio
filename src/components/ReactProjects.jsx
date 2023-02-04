import React from 'react'


import ProjectDeatils from './ProjectDeatils'


import portfolio from './portfolio.PNG'
import News from './News app.PNG'
import Textutil from './Textutil.PNG'
import Youtube from './Youtube.png'
import materialui from './materialui.PNG'
import Movie from './Movie.PNG'
import Ecommerce from './Ecommerce.png'

import {
    FaGithub
   
  } from "react-icons/fa";

const ReactProjects = () => {
  return (

    <div className="container-fluid  wrapper ">
    <div className="row ">
      <ProjectDeatils Ui={portfolio} title="Portfolio Website" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/myportfolio" description="Created using HTML Css React Js & Bootstrap" iconDes="Demo & Code"/>
      <ProjectDeatils Ui={News} title="News App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/news-app" description="Created using HTML React Js & Bootstrap" iconDes="Demo & Code"/>
      <ProjectDeatils Ui={Textutil} title="TextUtils App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/github/tree/master/src/components" description="Created using HTML React Js & Bootstrap" iconDes="Demo & Code"/>
      <ProjectDeatils Ui={Youtube} title="Youtube Playlist App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/Youtube" description="Created using HTML & React Js" iconDes="Demo & Code"/>
      <ProjectDeatils Ui={materialui} title="Material UI " icon={<FaGithub/>} link="https://github.com/AsimaJamal789/" description="Created using React Js and React Materialui" iconDes="Demo & Code"/>
      <ProjectDeatils Ui={Ecommerce} title="Ecommerce-Website" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/ecommerce" description="Created using HTML Bootstrap & React Js" iconDes="Demo & Code"/>
      <ProjectDeatils Ui={Movie} title="Movie-Search-App" icon={<FaGithub/>} link="https://github.com/AsimaJamal789/context-api" description="Created using HTML Css & React Js" iconDes="Demo & Code"/>
     
      
    </div>
    </div>
  )
}

export default ReactProjects
