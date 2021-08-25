import React from "react";
import "./Searchbar.css"
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'


const Searchbar = () =>{
    return(
        <div className="searchcontainer">
        <input className="search-bar" type="text" placeholder="Search Your Item Here"></input>
        <i className="search-icon"><FontAwesomeIcon icon={faSearch} /></i>
        </div>
    );
}

export default Searchbar