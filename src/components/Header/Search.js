import React from 'react';
import '../../assets/css/header.css';

const Search = () => {
  return (
    <div className="search-container">
      <input className="search-input" type="text" placeholder="  Search" /><i className="material-icons search-icon">search</i>
      <div className="sideIcons-container">
        <span className="search-secondaryIcons"><i className="material-icons search-side-icons">calendar_today</i></span>
        <span className="search-secondaryIcons"><i className="material-icons search-side-icons" style={{color: "rgb(98, 98, 233)", fontSize: "40px"}}>circle_notifications</i></span>
      </div>
    </div>
  )
}

export default Search
