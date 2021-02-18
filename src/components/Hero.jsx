import React from "react";
import Navbar from "./Navbar";

export default function Hero () {
    return (
        <div className="hero">
            <Navbar/>
            <div className="main-hero">
                <div className="intro">
                    <h1>More than just shorter links</h1>
                    <p>
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className="illustration">
                    <img src="images/illustration-working.svg" alt="bg"/>
                </div>
            </div>
        </div>
    );
}