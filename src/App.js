import React, {useState, useEffect} from 'react';

import './styles/main.scss';

import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

import {QuizContext} from './Helpers/Contexts';




const App = () => {
    
    const [gameState, setGameState] = useState("menu");

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((res => res.json()))
        .then((data) => {
            setQuestions(data.results);
        })
    }, [])

    const handleAnswer = (answer) => {
        if(answer === questions[currentIndex].correct_answer) {
            setScore(score + 1);
        }
        setShowAnswers(true);
    }

    const handleNextQuestion = () => {

        const newIndex = currentIndex + 1;
        if(newIndex > 9) {
            setGameState("endscreen");
        }else {
            setShowAnswers(false);
            setCurrentIndex(newIndex); 
        }
    }

    return(
        <div className="container">
            <QuizContext.Provider value={{gameState, setGameState}}>
                {gameState === "menu" && <MainMenu />}

                {gameState === "quiz" &&

                <Quiz 
                    data={questions[currentIndex]} 
                    handleAnswer={handleAnswer}
                    index={currentIndex}
                    showAnswers={showAnswers}
                    handleNextQuestion={handleNextQuestion}
                />
                
                }

                {gameState === "endscreen" && <EndScreen score = {score} />}
            </QuizContext.Provider>
           
        </div>
    )
}

export default App;