import { projectData } from "../../data-project.js";
import { useState } from "react";
import "./project.scss";

export default function Project() {

  const [currentPage, setCurrentPage] = useState(0);

  const slidePage = (direction) => {
    direction === "left" ? setCurrentPage(currentPage > 0 ? currentPage-1 : projectData.length-1) 
                         : setCurrentPage(currentPage < projectData.length-1 ? currentPage+1 : 0);
  }

  return ( 
    <div className="project" id="project">
      <div className="slider" style={{transform: `translateX(-${currentPage * 100}vw)` }}>
        {projectData.map((d) => (
          <div className="project-container">
            <div className="project">
              <div className="top">
                <div className="top-header">
                  <div className="title-container">
                    <h2>{ d.title }</h2>
                  </div>
                  <div className="icon-container">
                    <img src={ d.firstIcon } className="logo"/>
                    <img src={ d.secondIcon } className="logo"/>
                    <img src={ d.thirdIcon } className="logo"/>
                  </div>
                </div>
                <div className="top-body">
                  <ul>
                    <span>{ d.description }</span>
                    <li>{ d.firstPoint }</li>
                    <li>{ d.secondPoint }</li>
                    <li>{ d.thirdPoint }</li>
                  </ul>
                </div>
              </div>

              <div className="bottom">
                <div className="left">
                  <div className="img-container">
                    { d.video !== "" 
                      ? <iframe src={ d.video } />
                      : <img src={ d.demoImage }/>
                    }
                  </div>
                </div>
                <div className="right">
                  <div className="img-container">
                    <a href={ d.github } target="_blank">
                      <img src={ d.codeImage }/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>))}
      </div>
      <img src="assets/arrow.jpg" className="arrow left" onClick={() => slidePage("left")}/>
      <img src="assets/arrow.jpg" className="arrow right" onClick={() => slidePage("right")}/>
    </div> 
  )
}
