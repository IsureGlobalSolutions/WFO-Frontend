import React, { useState } from 'react';

const SingleCountdown = ({ initialValue, targetValue, label, startCounting }) => {
  const [count, setCount] = useState(initialValue);
  const [animationStarted, setAnimationStarted] = useState(false);

  const animateCounter = () => {
    if (!animationStarted) {
      let current = count;
      const duration = 1000; // Duration for the animation
      const increment = Math.floor((targetValue - count) / (duration / 16));
      const timer = setInterval(() => {
        current += increment;
        setCount(current);
        if (current >= targetValue) {
          clearInterval(timer);
          setCount(targetValue);
        }
      }, 16);
      setAnimationStarted(true);
    }
  };

  const handleMouseOver = () => {
    if (startCounting) {
      animateCounter();
    }
  };

  const handleMouseLeave = () => {
    // setCount(initialValue);
    setAnimationStarted(false);
  };

  return (
    <div className="single-countdown" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="number">
        <h2 className="counter">{count}</h2>
      </div>
      <div className="content">
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SingleCountdown;
