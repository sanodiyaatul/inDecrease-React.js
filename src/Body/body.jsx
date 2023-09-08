import React, { useState } from "react";
import body from "./body.css";


export default function Body(){
    let count=0;
    const [number , setnumber]= useState(count);

    function increse(){
        setnumber(number+1)
    }

    function decrese(){
        setnumber(number-1)
    }

    function neutral(){
        setnumber(count)
    }
    return(
        <div className="div">
            <h1 className="heading">{number}</h1>
            <button className="btn" onClick={decrese}>-</button>
            <button className="btn-btn" onClick={neutral}>neutral</button>
            <button className="btn" onClick={increse}>+</button>
            
        </div>
        
    );
}