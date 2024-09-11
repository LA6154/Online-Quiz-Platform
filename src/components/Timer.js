import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(30); // 30 seconds timer

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return <div>Time Left: {time} seconds</div>;
};

export default Timer;
