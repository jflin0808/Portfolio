import React from 'react';
import "./topbar.scss"
import {Phone, Email, LinkedIn, GitHub} from "@material-ui/icons"

export default function Topbar({fixed, setDynamic}) {
  return ( 
    <div className={"topbar " + (fixed && "dynamic")}>
        <div className="wrapper">
            <div className="left">
                <a href="#introduction" className="logo">
                    jiafei
                </a>
                <div className="item-container">
                    <Email className="icon"/>
                    <span>jfl0808@gmail.com</span>
                </div>
                <div className="item-container">
                    <LinkedIn className="icon"/>
                    <a href="https://www.linkedin.com/in/jiafeilin" target="_blank">LinkedIn</a>
                </div>
                <div className="item-container">
                    <GitHub className="icon"/>
                    <a href="https://www.github.com/jflin0808" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="right">
                <div className="menu-icon" onClick={()=>setDynamic(!fixed)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>

        </div>
    </div> 
  )
}
