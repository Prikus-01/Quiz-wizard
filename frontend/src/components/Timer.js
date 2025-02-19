import { useEffect, useState } from "react";

const Timer = ({ duration, onTimeUp, resetKey }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // Reset timer when resetKey changes
  }, [resetKey, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return <p className="text-red-500 font-bold">Time Left: {timeLeft}s</p>;
};

export default Timer;
