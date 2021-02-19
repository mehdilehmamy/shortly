import React, { useState } from "react";
import axios from "axios";

const API = "https://api.shrtco.de/v2/shorten?url="; //ShortURL API endpoint



export default function Input () {
    const [inputURL, setInputURL] = useState("");
    const [urlList, setUrlList] = useState([]);

    function handleChange (e) {
        let userInput = e.target.value;
        setInputURL(userInput);
    }

    function handleClick () {
        axios.get(`${API}${inputURL}`)
        .then(function (response) {
            // handle success
            setUrlList((prev) => {
                return [...prev, response.data]
            });
        console.log(urlList);
         }).catch(function (error) {
            // handle error
            console.log("Something went wrong: " + error);
          });
        setInputURL("");
    }
    return (
       <div>
           <div className="url-input" id="shorter">
                <input type="text" placeholder="Shorten a link here..." onChange={handleChange} value={inputURL}/>
                <button onClick={handleClick}>Shorten It!</button>
            </div>
            <div className="url-list">
             {urlList.map((url) => {
                    return <div className="url">
                             <p>{url.result.original_link}</p>
                             <a href={"http://" + url.result.short_link} target="_blank">{url.result.short_link}</a>
                           </div>
                })}
            </div>
       </div>
    );
}