import React, { useState, useEffect } from "react";
import GetsRemainingTimestamp from "./CardUtils";

const timeRemain = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

function Card({countdownTimestamp}) {
  const [remaining, setRemaining] = useState(timeRemain);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(countdown) {
    setRemaining(GetsRemainingTimestamp(countdown))
  }

  return (
    <div>
      <span>{remaining.days}</span>
      <span>{remaining.hours}</span>
      <span>{remaining.minutes}</span>
      <span>{remaining.seconds}</span>
    </div>
  );
}

export default Card;
