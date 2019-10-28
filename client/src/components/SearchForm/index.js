
import React from "react";
import "./style.css";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
    return (
        <div>
            <form id="searchForm" className="form-group">
                <h1>Book Search</h1>
                <input className="form-control" placeholder="Title" value={q} name="q" onChange={handleInputChange} required ></input>
                <button id="submitBtn" className="btn btn-light" type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;