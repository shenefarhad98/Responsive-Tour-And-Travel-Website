import "./NavbarStyle.css";
import { MenuData } from "./MenuData";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
const [clicked, setClicked] = useState(false);

const handleclick = () =>{
    setClicked(!clicked);
}
return(
    
<nav className="navbaritems">

<h1><span className="highlight">T</span>RAVEL</h1>

<ul className={clicked? "navbar active" :"navbar"}>
    
    {MenuData.map((item,index) =>{

return(
  <li key={index}>
    <Link to={item.url} className={item.cName}>
        <i className={item.icon}></i>
    {item.title}</Link>
    
    </li>
)
    }
    
    )}
  
</ul>
<div className="mobile" onClick={handleclick}>
    <i className={clicked? "fas fa-times" :"fas fa-bars"}></i>
</div>
</nav>


)
}
export default Navbar;