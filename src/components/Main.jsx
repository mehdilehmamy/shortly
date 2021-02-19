import React from "react";


export default function Main () {
    return (
        <div className="main">
            <div className="stats">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
            </div>
            <div className="card-stack">
                <div className="card">
                    <div className="img-container"><img src="images/icon-brand-recognition.svg" alt="icon"/></div>
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="card card2">
                    <div className="img-container"><img src="images/icon-detailed-records.svg" alt="icon"/></div>
                    <h2>Detailed records</h2>
                    <p>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
                </div>
                <div className="card card3">
                    <div className="img-container"><img src="images/icon-fully-customizable.svg" alt="icon"/></div>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
                </div>
            </div>
            <div className="green-bar"></div>
        </div>

    );
}