import React from "react";
import "./style.css";

function Card({ icon, title, children }) {
    return (
        <div className="card">
            <h1>{icon}{title}</h1>
            <div className="cardBody">{children}</div>
        </div>
    )
}
export default Card;
