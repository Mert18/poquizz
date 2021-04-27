import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';

const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);
    return (
        <div className="menu">
            <div className="menu__hero">
                <h1>Welcome to <span className="name">Poquizz</span>.</h1>
                <h2>There will be 10 questions waiting for you.</h2>
            </div>
            <div className="menu__buttons">
                <button onClick={() => {setGameState("quiz")}}>Start</button>
            </div>
        </div>
    )
}

export default MainMenu
