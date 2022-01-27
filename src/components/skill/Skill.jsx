import Skills from "../skills/Skills.jsx";
import { useState, useEffect } from "react";
import { language, web, ds } from "../../data-skill.js"
import "./skill.scss";

export default function Skill() {

  const [selected, setSelected] = useState("language");
  const [data, setData] = useState([]);

  const skills  = [
    {
      id: "language",
      title: "Languages",
    },
    {
      id: "web",
      title: "Web Development",
    },
    {
      id: "ds",
      title: "Data Science",
    },
  ];

  useEffect(() => {
    switch(selected){
      case "language":
        setData(language);
        break;
      case "web":
        setData(web);
        break;
      case "ds":
        setData(ds);
        break;
      default:
        setData(language);
    }
  }, [selected])

  return ( 
    <div className="skill" id="skill">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <Skills 
          title={skill.title} 
          dynamic={selected === skill.id}
          id={skill.id}
          setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="wrapper">
        <div className="skill-container">
          {data.map((data) => (
            <div className="skill">
              <img src={data.img}/>
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div> 
    </div> 
  )
}
