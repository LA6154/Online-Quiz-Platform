import React, { useState } from 'react';

const QuizForm = ({ addQuiz }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuiz = {
      question,
      options,
      correctAnswer,
    };
    addQuiz(newQuiz);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Quiz</h3>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
        />
      ))}
      <input
        type="text"
        placeholder="Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <button type="submit">Add Quiz</button>
    </form>
  );
};

export default QuizForm;
