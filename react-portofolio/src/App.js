// import logo from './logo.svg';
// import './App.css';

import About from "./About";
import Home from "./Home";
import Other from "./other";
import Project from "./project";
import Skills from "./skills";
// import NavBar from "./Navbar";

function App() {
  return (
    <div className="col-12">
    {/* <NavBar/> */}
  
    <Home/>
    <About/>
    {/* <Skills/> */}
    <Other/>
    <Project/>


      
    </div>
  );
}

export default App;
