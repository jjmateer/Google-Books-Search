  
import React from "react";
import "./style.css";

function Results({children}) {
    return (
        <div className="resultsBody">
            <h1>Results</h1>
            <div>{children}</div>
        </div>
    )
}

export default Results;