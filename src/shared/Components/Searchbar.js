import React, { useState } from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = (props) => {
  const [searchvalue, setsearchvalue] = useState("");
  const searchbarhandler = (event) => {
    const value = event.target.value;
    setsearchvalue(value);
  };
  const filtersearchhandler = () => {
    const value = searchvalue.toUpperCase();
    props.onsearchvalue(value);
    window.scrollTo(0, 700);
  };

  return (
    <div className="searchcontainer">
      <input
        className="search-bar"
        type="text"
        value={searchvalue}
        onChange={searchbarhandler.bind(this)}
        placeholder="Search Your Item Here"
        name="search"
        id="searchitem"
      ></input>
      <i className="search-icon" onClick={filtersearchhandler}>
        <FontAwesomeIcon icon={faSearch} />
      </i>
    </div>
  );
};

export default Searchbar;
