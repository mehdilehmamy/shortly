import React from "react";

export default function Navbar () {
    return (
        <header>
            <nav>
                <img src="images/logo.svg" alt="logo"/>
            </nav>
            <div className="login">
                <a href="#">Login</a>
                <button className="signup-button">Signup</button>
            </div>
        </header>
    );
}