import React from "react"
import "./Itemlist.css"
import Item from "./Item"

const Itemlist = props =>{
    // if(props)
    // if (props.items.length === 0) {
    //     return (
    //       <div className="center">
    //           <h2>No users found.</h2>
    //       </div>
    //     );
    //   }
    return(
    <div className="card-container">
        {props.items.map(curr =>(
            <Item
            key = {curr.id}
            name = {curr.name}
            price = {curr.price}
            details = {curr.details}
            age = {curr.age}
            location = {curr.location} />
        ))}
    </div>
    );

}

export default Itemlist