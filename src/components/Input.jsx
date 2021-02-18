import React from "react";

export default function Input () {
    return (
        <div className="url-input">
            <input type="text" placeholder="Shorten a link here..."/>
            <button>Shorten It!</button>
        </div>
    );
}