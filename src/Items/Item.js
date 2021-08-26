import React from "react"
import "./Item.css"
import Logo1 from "../images/bmw.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faPen} from "@fortawesome/free-solid-svg-icons"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
const Item = props =>{
    return(
        <div className="item-container">
            <img className="product-img" src={Logo1} alt="bmw"></img>
            <h2 className="product-name">{props.name}</h2>
            <div className="details">
            <h1 className="price"><FontAwesomeIcon icon={faRupeeSign} style={{fontSize:"20px"}}/>&nbsp;{props.price}</h1>
            <p className="time">{props.age}</p>
            <p className="product-details">{props.details}</p>
            <p className="location"><FontAwesomeIcon icon={faMapMarkerAlt}/>&nbsp;{props.location}</p>
            </div>
            <div className="buttons-container">
            <button className="buybtn"><FontAwesomeIcon icon={faShoppingBag} />&nbsp;Buy</button>
            <div>
            <button className="buybtn2"><Link to="/updateitem"><FontAwesomeIcon icon={faPen} /></Link></button>
            <button className="buybtn2"><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
            </div>
        </div>
    );
}

export default Item