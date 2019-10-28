import React from "react";
import "../Card/style.css"
function Card({ icon, title, children }) {
  return (
    <div id="results" className="card mt-4 text-white bg-dark" >
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div >
  );
}

export default Card;
