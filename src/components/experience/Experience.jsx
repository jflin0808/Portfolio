import { experience } from "../../data-experience.js";
import "./experience.scss"

export default function Experience() {
  return ( 
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="experience-container">
        {experience.map((exp) =>(
          <div className={exp.highlight ? "card-container highlight" : "card-container"}>
              <div className="card-top">
                <a href={ exp.website } target="_blank">
                  <img src="assets/misc/website.png" className="left-icon"/>
                </a>
                <img src={ exp.logo } className="middle-icon"/>
                <a href={ exp.location } target="_blank">
                  <img src="assets/misc/map.png" className="right-icon"/>
                </a>
              </div>
              <div className="card-middle">
                <p>{ exp.description }</p>
              </div>
              <div className="card-bottom">
                <h3>{ exp.title }</h3>
                <h4>{ exp.employer }</h4>
              </div>
          </div>
        ))}
      </div>
    </div> 
  )
}
