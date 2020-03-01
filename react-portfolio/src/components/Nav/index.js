import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav class="navbar navbar-light bg-light">
        <a class="name">Dyani Boucher</a>

        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="index.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>

        </ul>
        
    </nav>
    );
}
export default Nav;