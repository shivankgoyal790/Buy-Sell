import React, { useState } from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router";

const Searchbar = () => {
  const [searchvalue, setsearchvalue] = useState("");
  const searchbarhandler = (event) => {
    const value = event.target.value;
    setsearchvalue(value);
  };

  const filterhandler = () => {
    Navigate("#itemback");
  };
  return (
    <div className="searchcontainer">
      <input
        className="search-bar"
        type="text"
        value={searchvalue}
        onChange={searchbarhandler}
        placeholder="Search Your Item Here"
        name="search"
        id="searchitem"
      ></input>
      <i className="search-icon" onClick={filterhandler}>
        <FontAwesomeIcon icon={faSearch} />
      </i>
    </div>
  );
};

export default Searchbar;
