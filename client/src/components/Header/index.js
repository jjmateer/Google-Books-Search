  
import React from "react";
import "./style.css";

function Header() {
    return (
    <header className="mainHeader">
        <h1>Google Book Search</h1>
        <nav>
            <a href="/">Search</a>
            <a href="/saved">Saved</a>
        </nav>
    </header>
    );
}

export default Header;