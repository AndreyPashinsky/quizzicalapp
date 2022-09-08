import React from "react"

export default function Question(props) {
    const deCode = decodeURIComponent
    
    return (
        <div style={{pointerEvents: props.isOver ? "none" : "auto"}} className="question-box">
            <h3>{deCode(props.question)}</h3>
            <div className="answers-box">
                
                <button className={ deCode(props.selectedAnswer) === deCode(props.allAnswers[0]) ? 
                        "answer-btn selected" : 
                        "answer-btn" } 
                        onClick={() => props.handleClick(props.id, deCode(props.allAnswers[0]))}>
                {deCode(props.allAnswers[0])}</button>
                
                <button className={ deCode(props.selectedAnswer) === deCode(props.allAnswers[1]) ? 
                        "answer-btn selected" : 
                        "answer-btn" }  
                        onClick={() => props.handleClick(props.id, deCode(props.allAnswers[1]))}>
                {deCode(props.allAnswers[1])}</button>
                
                {props.allAnswers[2] && <button className={ deCode(props.selectedAnswer) === deCode(props.allAnswers[2]) ? 
                        "answer-btn selected" : 
                        "answer-btn" }  
                        onClick={() => props.handleClick(props.id, deCode(props.allAnswers[2]))}>
                {deCode(props.allAnswers[2])}</button>}
                
                {props.allAnswers[3] && <button className={ deCode(props.selectedAnswer) === deCode(props.allAnswers[3]) ? 
                        "answer-btn selected" : 
                        "answer-btn" }  
                        onClick={() => props.handleClick(props.id, deCode(props.allAnswers[3]))}>
                {deCode(props.allAnswers[3])}</button>}
            </div>
        </div>
    )
}