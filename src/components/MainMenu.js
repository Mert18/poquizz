import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';

const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);
    return (
        <div className="menu">
            
            <button onClick={() => {setGameState("quiz")}}>Start</button>
        </div>
    )
}

export default MainMenu
