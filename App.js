import React, { useState } from "react"
import Start from "./components/Start"
import Main from "./components/Main"

export default function App() {
    const [quizOn, setQuizOn] = useState(false)
    
    return (
        quizOn ? <Main gameIsOn={setQuizOn} /> : <Start gameIsOn={setQuizOn} />
    )
}
