import React, { useEffect, useState } from "react";

export default function CountDown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-03-23`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        দিন: Math.floor(difference / (1000 * 60 * 60 * 24)).toLocaleString(
          "bn-BD"
        ),
        ঘণ্টা: Math.floor((difference / (1000 * 60 * 60)) % 24).toLocaleString(
          "bn-BD"
        ),
        মিনিট: Math.floor((difference / 1000 / 60) % 60).toLocaleString(
          "bn-BD"
        ),
        সেকেন্ড: Math.floor((difference / 1000) % 60).toLocaleString("bn-BD"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={Math.random()}>
        <b>{timeLeft[interval] + " "}</b> {" " + interval}
      </span>
    );
  });
  return (
    <div className="countdown">
      <h1>রমযান এর বাকি</h1>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
