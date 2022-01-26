import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import "./introduction.scss"

export default function Introduction() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ["Developer", "Data Scientist", "Musician", "Dreamer"],
    })
  }, []);

  return ( 
    <div className="introduction" id="introduction">
      <div className="left">
        <div className="img-container">
          <img src="assets/who.gif"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Jia fei Lin</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skill">
          <img src="assets/down.jpg" alt=""/>
        </a>
      </div>
    </div> 
  )
}
