import React from 'react';
import "./skills.scss"

export default function Skills({ title, dynamic, id, setSelected }) {
  return ( 
    <li className={dynamic ? "skills dynamic" : "skills"} 
        onClick={() => setSelected(id)}>
        {title}
    </li> 
  )
}
