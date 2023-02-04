import React from "react";
import "./Skills.css";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaUikit,
 
  FaBootstrap,
  FaWordpress,
  
} from "react-icons/fa";
import {  SiMaterialui} from "react-icons/si";
import SkillBar from "react-skillbars";

const SkillSet = () => {
  const skills = [
    { type: "HTML", level: 90 },
    {
      type: "Css",
      level: 80,
      color: {
        bar: "rgb(163, 163, 242)",
        title: { background: "rgb(69, 69, 240)" },
      }
    },
    {
      type: "Bootstrap",
      level: 75,
      color: {
        bar: "rgb(189, 89, 189)",
        title: { background: "purple" },
      },
    },

    {
      type: "Javascript",
      level: 80,
      color: {
        bar: "rgb(242, 242, 153)",
        title: { background: "rgb(212, 212, 5)" },
      }
    },
    {
      type: "React",
      level: 40,
      color: {
        bar: "lightblue",

        title: { background: " #2196de" },
      },
    },
   
    {
      type: "Material Ui",
      level: 75,
      color: {
        bar: "lightskyblue",
        title: { background: "rgb(65, 164, 240)" },
      },
    },
    {
      type: "Figma",
      level: 95,
      color: {
        bar: "#e9464c",
        title: { background: "red" },
      },
    },
    {
      type: "UI/UX",
      level: 80,
      color: {
        bar: "pink",
        title: { background: "#cb207e" },
      },
    },
    {
      type: "Wordpress",
      level: 50,
      color: {
        bar: "grey",
        title: { background: "rgb(73, 71, 71)" },
      },
    },
  ];

  return (
    <div className="card  resp-skill ">
      <div className="card-body ">
        <div className="conatiner fade-in-icons">
          <FaHtml5 className="html mx-2" />
          <FaCss3 className="Css mx-2" />
          <FaJsSquare className="javascript mx-2" />
          <FaBootstrap className="Bootstrap mx-2" />
          <FaReact className="React mx-2" />
          <SiMaterialui className="Python mx-2" />
          <FaFigma className="Figma mx-2" />
          <FaUikit className="Ui mx-2" />
          <FaWordpress className="wordpress mx-2"/>
        </div>
        <SkillBar   skills={skills} animationDelay={1000} height={30} />
      </div>
    </div>
  );
};

export default SkillSet;
