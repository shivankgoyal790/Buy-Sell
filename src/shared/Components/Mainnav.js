import React from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import {Link} from "react-router-dom";

const Mainnav = () =>{
return(
<div className="main-header"> 
    <h1 className="logo"><Link to="/">Buy&Sell</Link></h1>
    <Searchbar></Searchbar>
    <Navbar></Navbar>
  
</div>
);  
}

export default Mainnav