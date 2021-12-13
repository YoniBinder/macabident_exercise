import React, { useState } from "react";
import "./Search.scss";
export default function Search({ updateSearch }) {
  const [searchBar, setSearchBar] = useState();

  function handleSearch(event) {
    event.preventDefault();
    updateSearch(searchBar);
  }

  function handleChange(event) {
    setSearchBar(event.target.value);
  }

  return (
    <div className="search-container">
      <div className="search-title">הרופאים שלנו</div>
      <form onSubmit={handleSearch} className="search-form">
        <div className="searchBar-container">
          <input type="text" className="search-bar" onChange={handleChange} />
          <button type="submit" className="search-icon">
            <i className="fas fa-search"></i>
          </button>
          <div className="searchBar-border"></div>
        </div>
        <div className="radio-container">
          <input type="radio" id="byName" name="searchBy" defaultChecked />
          <label forhtml="byName" className="radio-label">
            חיפוש לפי שם רופא
          </label>
          <input type="radio" id="byTreatment" name="searchBy" />
          <label forhtml="byTreatment" className="radio-label">
            חיפוש לפי תחום טיפול
          </label>
          <input type="radio" id="byprofession" name="searchBy" />
          <label forhtml="byprofession" className="radio-label">
            חיפוש לפי מומחיות
          </label>
        </div>
      </form>
    </div>
  );
}
