import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience wrapper resp" style={{marginTop:"40px"}}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
      
          className="vertical-timeline-element--education" style={{color:"rgb(255, 193, 7)"}}
          date="2010 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-dark "style={{fontSize:"20px"}} >
        Federal School Nowshera Kpk Pakistan
          </h3>
          <p className="text-dark"> O-Level. Grade A</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
      
      className="vertical-timeline-element--education" style={{color:"rgb(255, 193, 7)"}}
      date="2015 - 2017"
      iconStyle={{ background: "#3e497a", color: "#fff" }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title text-dark "style={{fontSize:"20px"}} >
      Government Girls Degree College Nowshera Kpk Pakistan</h3>
      <p className="text-dark">A-level. Grade A </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
      
      className="vertical-timeline-element--education" style={{color:"rgb(255, 193, 7)"}}
      date="2018 - 2022"
      iconStyle={{ background: "#3e497a", color: "#fff" }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title text-dark "style={{fontSize:"20px"}} >
      University of engineering and technology 
      </h3>
      <p className="text-dark"> BE. Grade 3.33</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"  style={{color:"rgb(255, 193, 7)"}}
          date="Aug 2022 - Nov 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-dark" style={{fontSize:"20px"}}>
           Internship SoftITLand Lahore Pakistan
          </h3>
          
          <p className="text-dark">
            Reactjs
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;