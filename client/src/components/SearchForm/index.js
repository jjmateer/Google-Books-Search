  
import React from "react";
import "./style.css";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
    return (
        <div>
            <form className="searchForm">
                <h1>Book Search</h1>
                <input placeholder="Title" value={q} name="q" onChange={handleInputChange} required ></input>
                <button className="submitBtn" type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;