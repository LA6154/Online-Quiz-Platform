import React, { useState } from 'react';
import Timer from './Timer';

const Quiz = ({ quiz, onSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedAnswer === quiz.correctAnswer);
  };

  return (
    <div>
      <h3>{quiz.question}</h3>
      <Timer />
      <form onSubmit={handleSubmit}>
        {quiz.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="quiz-option"
              value={option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default Quiz;
