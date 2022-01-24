import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Introduction from "./components/introduction/Introduction";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {

  // Creating states for an open/closed menu
  const [fixed,setDynamic] = useState(false)

  return (
    <div className="app">
      <Topbar fixed={fixed} setDynamic={setDynamic}/>
      <Menu fixed={fixed} setDynamic={setDynamic}/>
      <div className="sections">
        <Introduction/>
        <Skill/>
        <Project/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
