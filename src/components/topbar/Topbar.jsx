import React from 'react';
import "./topbar.scss"
import {Phone, Email} from "@material-ui/icons"

export default function Topbar({fixed, setDynamic}) {
  return ( 
    <div className={"topbar " + (fixed && "dynamic")}>
        <div className="wrapper">
            <div className="left">
                <a href="#introduction" className="logo">
                    jiafei
                </a>
                <div className="item-container">
                    <Phone className="icon"/>
                    <span>+1 416 836 0613</span>
                </div>
                <div className="item-container">
                    <Email className="icon"/>
                    <span>jfl0808@gmail.com</span>
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
