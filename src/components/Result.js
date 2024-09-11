import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>
        You scored {score} out of {total}.
      </p>
    </div>
  );
};

export default Result;
