import React from "react"
import "./Additem.css"

const Updateitem = () =>{
    return(
        <div className="sell-flex-container">
        <div className="sell-container">
            <h1 className="logo-container"><p className="sell-logo">Buy&Sell</p></h1>
            <div className="item-details">
            <input type="file"></input>
            <input type="text" placeholder="Product Name" />    
            <input type="text" placeholder="Sell Price"></input> 
            <input type="text" placeholder="How Old is Your Product"></input>
            <input type="text" placeholder="Description"></input> 
            <input type="text" placeholder="location"></input>
            <button className="submit_sellbtn" type="submit">Edit</button> 
            </div>
            
        </div>
        </div>
    );  
}

export default Updateitem