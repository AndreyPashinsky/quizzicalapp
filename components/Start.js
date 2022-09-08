import React from "react"

export default function Start(props) {
    
    function handleClick() {
        props.gameIsOn(prevState => !prevState)
    }
    
    return (
        <div className="quizzical-start">
            <h1>Quizzical</h1>
            <p>Make sure you know something</p>
            <button className="btn" onClick={handleClick}>Start</button>
        </div>
    )
}