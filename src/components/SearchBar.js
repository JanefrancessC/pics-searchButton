import React, { useState } from "react";
import './SearchBar.css';
const SearchBar = ({ onSubmit }) => {
  const[term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term)
  };
  const handleChange = (e) => {
    //console.log(e.target.value);
    setTerm(e.target.value);
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search-bar">Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
