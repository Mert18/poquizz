import React from 'react';

//import questions here (trivia api is a good choice.)

const Quiz = ({handleAnswer, data: {question, incorrect_answers, correct_answer}, showAnswers, handleNextQuestion}) => {

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

      const shuffledAnswers = shuffle([correct_answer, ...incorrect_answers]);

    return(
        <div className="quiz">
            <div className="quiz__question">
                <h2 dangerouslySetInnerHTML={{__html: question}} />
            </div>
            <div className="quiz__options">
                {shuffledAnswers.map((answer) => {
                    const textColor = showAnswers ? answer === correct_answer ? 'correct' : 'false' : 'normal';

                    return(
                    <button
                        className={textColor}
                        onClick={() => {handleAnswer(answer)}}
                        dangerouslySetInnerHTML={{__html: answer}} />
                )})}
            </div>
            {showAnswers && (
                <button className="next" onClick={() => handleNextQuestion()}>
                    Next Question
                </button>
            )}
        </div>
        
        )
}
export default Quiz
