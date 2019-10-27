import React from "react";
import "./style.css";
import { ListItem } from "../List/List";

function Book ({title, subtitle, authors, link, description, image, Button }) {
    return (
        <ListItem>
            <h1>{title}{subtitle}</h1>
            <a href={link}>
              View
            </a>
            <p className="authors">Written by {authors}</p>
            <img className="bkimg" src={image} alt={title} />
            <p>{description}</p>
        </ListItem>
        
    )
}

export default Book;