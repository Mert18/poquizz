import React from 'react';

//import questions here (trivia api is a good choice.)




const Quiz = ({handleAnswer, data: {question, incorrect_answers, correct_answer}, index}) => {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random - 0.5);

    return(
        <div className="quiz">
            <div className="quiz__question">
                <h2 dangerouslySetInnerHTML={{__html: question}} />
            </div>
            <div className="quiz__options">
                {shuffledAnswers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={handleAnswer}
                        dangerouslySetInnerHTML={{__html: answer}} />
                ))}
            </div>
        </div>
        
        )
}
export default Quiz
