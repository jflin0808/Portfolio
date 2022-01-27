import React from 'react';
import "./experience.scss"

export default function Experience() {
  return ( 
    <div className="experience" id="experience">
      <div className="experience-container">
        <h1>Experience</h1>
        <div className="card-container">
            <div className="card-top">
              <img src="assets/misc/website.png" className="left-icon"/>
              <img src="assets/misc/lakeridge.png" className="middle-icon"/>
              <img src="assets/misc/map.png" className="right-icon"/>
            </div>

            <div className="card-middle">
              <p>
                Sample Text
              </p>
            </div>
            
            <div className="card-bottom">
              <h3>Lakeridge</h3>
              <h4>IT Support</h4>
            </div>
        </div>
      </div>
    </div> 
  )
}
