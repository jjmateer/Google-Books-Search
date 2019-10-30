import React from "react";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <div>
      <h3 className="font-italic">{title}</h3>
      {subtitle && <h5 className="font-italic">{subtitle}</h5>}
      <div className="btn-container">
        <p className="font-italic small">Written by {authors}</p>
        <img className="img-thumbnailw-100" src={image} alt={title} />
        <p>{description}</p>
        <Button />
        <a className="btn btn-warning" target="_blank" rel="noopener noreferrer" href={link}>
          View
            </a>
      </div>
    </div>
  );
}

export default Book;
