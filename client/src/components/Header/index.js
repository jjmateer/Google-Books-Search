
import React from "react";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} href="saved">Saved</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Header;