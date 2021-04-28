import React from 'react';

const EndScreen = ({score}) => {


    return (
        <div className="end">
            <div className="end__score">
                <h2>Your score was {score}</h2>
            </div>
            <div className="end__again">
                <a href="/">PLAY AGAIN</a>
            </div>
        </div>
    )
}

export default EndScreen
