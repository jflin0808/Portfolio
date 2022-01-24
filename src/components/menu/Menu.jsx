import "./menu.scss"

export default function Menu({fixed, setDynamic}) {
  return (
    <div className={"menu " + (fixed && "dynamic")}>
        <ul>
            <li onClick={()=>setDynamic(false)}>
                <a href="#introduction">Introduction</a>
            </li>
            <li onClick={()=>setDynamic(false)}>
                <a href="#skill">Skills</a>
            </li>
            <li onClick={()=>setDynamic(false)}>
                <a href="#project">Projects</a>
            </li>
            <li onClick={()=>setDynamic(false)}>
                <a href="#experience">Experience</a>
            </li>   
            <li onClick={()=>setDynamic(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
