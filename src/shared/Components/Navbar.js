import React from "react";
import "./Navbar.css"
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
    <ul className="navlinks">
        <li><NavLink to="/Auth"><u>Login</u></NavLink> </li>
        <li><button className="sellbtn">SELL +</button></li>
    </ul>);
}

export default Navbar