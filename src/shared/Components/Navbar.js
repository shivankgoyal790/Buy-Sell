import React from "react";
import "./Navbar.css"
import {NavLink} from 'react-router-dom'
import Avatar from "./Avatar";

const Navbar = () =>{
    return(
    <ul className="navlinks">
        <li><Avatar></Avatar></li>
        <li><NavLink to="/Auth"><u>Login</u></NavLink> </li>
        <li><button className="sellbtn"><NavLink to="/Sell">SELL +</NavLink></button></li>
    </ul>);
}

export default Navbar