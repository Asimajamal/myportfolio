import Navbar from './components/Navbar';
import SkillSet from './components/SkillSet';
import Education from './components/Education';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import ReactProjects from './components/ReactProjects';
import WordpressProjects from './components/WordpressProjects';
import UIProjects from './components/UIProjects';
import Alert from './components/Alert'
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
function App() {

  const [alert,setAlert]=useState(null);

  const displayAlert=(message,type)=>{

    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 7000);
    
     
  }

  
  return (
    <div>
 
      <Router>
        <Navbar  />
        <Alert alert={alert} />
        <Routes>
        <Route  exact path="/" element={<Home displayAlert={displayAlert} />}/>
        <Route  exact path="/Skills" element={<SkillSet/>}/>
        <Route  exact path="/Projects" element={<Projects/>}/>
        <Route  exact path="/Education" element={<Education/>}/>
        <Route  exact path="/ReactProjects" element={<ReactProjects/>}/>
        <Route  exact path="/WordpressProjects" element={<WordpressProjects/>}/>
        <Route  exact path="/UIProjects" element={<UIProjects/>}/>
        
        </Routes>
       
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
