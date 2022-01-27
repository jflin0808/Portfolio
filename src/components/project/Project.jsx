import React from 'react';
import "./project.scss"

export default function Project() {
  return ( 
    <div className="project" id="project">
      <div className="slider">
        <div className="project-container">
          <div className="project">
            <div className="top">
              <div className="top-header">
                <div className="title-container">
                  <h2>Recipe Hub</h2>
                </div>
                <div className="icon-container">
                  <img src="assets/language/python.png" className="logo"/>
                  <img src="assets/web/django.jpg" className="logo"/>
                  <img src="assets/misc/docker.png" className="logo"/>
                </div>
              </div>
              <div className="top-body">
                <ul>
                  <span>Fully functional web application allowing users to create and share recipes online</span>
                  <li>Functional <span>CRUD</span> operations for users and recipes</li>
                  <li>Engineered <span>REST API</span> and set up relational data models</li>
                  <li>Created <span>Docker</span> image of app and deployed to Google Cloud</li>
                </ul>
              </div>
            </div>

            <div className="bottom">
              <div className="left">
                <div className="img-container">
                  <img src="assets/demo/recipehub.png"/>
                </div>
              </div>
              <div className="right">
                <div className="img-container">
                  <a href="https://github.com/jflin0808/RecipeHub" target="_blank">
                    <img src="assets/code/recipehub.png"/>
                  </a>
                </div>
              </div>
              

            </div>


            {/* <div className="left">
              <div className="left-container">
                <h2>Recipe Hub</h2>
                <div className="img-container">
                  <img src="assets/language/python.png" className="logo"/>
                  <img src="assets/web/django.jpg" className="logo"/>
                  <img src="assets/docker.png" className="logo"/>
                </div>
                <p>Fully functional web application allowing users to create and share recipes online</p>
              </div>
            </div>

            <div className="right">
              <div className="right-container">
                <div className="description-container">
                  <ul>
                    <li>Functional <span>CRUD</span> operations for users and recipes</li>
                    <li>Engineered <span>REST API</span> and set up relational data models</li>
                    <li>Created <span>Docker</span> image of app and deployed to Google Cloud</li>
                  </ul>
                </div>
                <div className="img-container">
                  <a href="https://github.com/jflin0808/RecipeHub" target="_blank">
                    <img src="assets/demo/recipehub_demo.png"/>
                  </a>
                </div>
                <div className="img-container">
                  <img src="assets/code/recipehub.png"/>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <img src="assets/arrow.jpg" className="arrow left"/>
      <img src="assets/arrow.jpg" className="arrow right"/>
    </div> 
  )
}
