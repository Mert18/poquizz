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
    

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((res => res.json()))
        .then((data) => {
            setQuestions(data.results);
        })
    }, [])

    const handleAnswer = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        if (newIndex < questions.length) {
            setCurrentIndex(newIndex);
        } else {
            setGameState("endscreen");
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
                />
                
                }

                {gameState === "endscreen" && <EndScreen />}
            </QuizContext.Provider>
           
        </div>
    )
}

export default App;