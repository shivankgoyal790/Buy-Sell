import React from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"

const Mainnav = () =>{
return(
<div className="main-header"> 
    <h1 className="logo">Buy&Sell</h1>
    <Searchbar></Searchbar>
    <Navbar></Navbar>
  
</div>
);  
}

export default Mainnav