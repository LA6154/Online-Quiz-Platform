import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const addQuiz = (newQuiz) => {
    setQuizzes([...quizzes, newQuiz]);
  };

  const handleQuizSubmit = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  return (
    <div>
      <h1>Online Quiz Platform</h1>
      {quizzes.length === 0 ? (
        <QuizForm addQuiz={addQuiz} />
      ) : isQuizComplete ? (
        <Result score={score} total={quizzes.length} />
      ) : (
        <Quiz quiz={quizzes[currentQuizIndex]} onSubmit={handleQuizSubmit} />
      )}
    </div>
  );
};

export default App;
