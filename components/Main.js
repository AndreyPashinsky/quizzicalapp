import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Question from "./Question"

export default function Main(props) {
    const [questionsData, setQuestionsData] = useState([])
    const [quizResult, setQuizResult] = useState(0)
    const [endGame, setEndGame] = useState(false)
    
    const getQuizData = useEffect(async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
        const data = await response.json()
        
        setQuestionsData(data.results.map(result => {
            const randomNum = Math.ceil(Math.random() * 4)
            const allAnswers = result.incorrect_answers
            allAnswers.splice(randomNum, 0, result.correct_answer)
            
                return {
                    id: nanoid(),
                    question: result.question,
                    correctAns: result.correct_answer,
                    allAns: allAnswers,
                    selectedAns: ""
                }
        }))
        
    }, [])
    
    function selectAnswer(id, answer) {

        setQuestionsData(prevData => {
            return prevData.map(question => {
                return question.id === id ?
                {...question, selectedAns: answer} :
                question
            })
        })    
    }
    
    function checkAnswers() {
        questionsData.map(question => {
            if (question.selectedAns === decodeURIComponent(question.correctAns)) {
                setQuizResult(prevState => {
                    return prevState + 1
                })
            } else {}
        })
        setEndGame(prevState => !prevState)
    }
    
    function playAgain() {
        props.gameIsOn(prevState => !prevState)
    }
 
    const questionElements = questionsData.map(question => {
        return (
            <Question
                key={question.id}
                id={question.id}
                question={question.question}
                correctAnswer={question.correctAns}
                allAnswers={question.allAns}
                selectedAnswer={question.selectedAns} 
                handleClick={selectAnswer} 
                isOver={endGame}
            />
        )
    })
    
    return (
        <div className="quiz-container">
            {questionElements}
            {endGame ? 
            <div className="quiz-results">
                <h3>Your scored {quizResult}/5 correct answers</h3>
                <button className="btn" onClick={playAgain}>Play again</button>
            </div> :
            <button className="btn" onClick={checkAnswers}>Check answers</button>}
        </div>
    )
}