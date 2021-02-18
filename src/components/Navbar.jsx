import React from "react";

export default function Navbar () {
    return (
        <header>
            <nav>
                <img src="images/logo.svg" alt="logo"/>
                <ul>
                   <li><a href="#">Features</a></li>
                   <li><a href="#">Pricing</a></li>
                   <li><a href="#">Ressources</a></li> 
                </ul>
            </nav>
            <div className="login">
                <a href="#">Login</a>
                <button className="signup-button">Signup</button>
            </div>
        </header>
    );
}