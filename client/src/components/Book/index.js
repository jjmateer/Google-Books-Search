import React from "react";
// import { ListItem } from "../List";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <div>
      <h3 className="font-italic">{title}</h3>
      {subtitle && <h5 className="font-italic">{subtitle}</h5>}
      <div className="btn-container">
        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
          View
            </a>
        <p className="font-italic small">Written by {authors}</p>
        <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Book;
