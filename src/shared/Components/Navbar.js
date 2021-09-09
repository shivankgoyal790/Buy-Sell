import React, { useContext } from "react";
import "./Navbar.css"
import {NavLink} from 'react-router-dom'
import Avatar from "./Avatar";
import {AuthContext} from "../Authcontext"
const Navbar = () =>{
    const auth = useContext(AuthContext);
    return(
    <ul className="navlinks">
        <li><Avatar/></li>
        {!auth.isLoggedIn && (
        <li><NavLink to="/Auth"><u>Login</u></NavLink> </li>)}
        {auth.isLoggedIn && (<li  onClick={auth.logout}><u>Logout</u></li>)}
        <li><button className="sellbtn"><NavLink to="/Sell">SELL +</NavLink></button></li>
    </ul>);
}

export default Navbar