import React, { useState, useEffect } from "react";
import {
  CardItem,
  CardsContainer,
  CardText,
  CountCard,
} from "../styles/styled";
import GetsRemainingTimestamp from "./CardUtils";

const timeRemain = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

function Card({ countdownTimestamp }) {
  const [remaining, setRemaining] = useState(timeRemain);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(countdown) {
    setRemaining(GetsRemainingTimestamp(countdown));
  }

  return (
    <CardsContainer>
      <CardItem>
        <CountCard>{remaining.days}</CountCard>
        <CardText>Days</CardText>
      </CardItem>
      <CardItem>
        <CountCard>{remaining.hours}</CountCard>
        <CardText>Hours</CardText>
      </CardItem>
      <CardItem>
        <CountCard>{remaining.minutes}</CountCard>
        <CardText>Minutes</CardText>
      </CardItem>
      <CardItem>
        <CountCard>{remaining.seconds}</CountCard>
        <CardText>Seconds</CardText>
      </CardItem>
    </CardsContainer>
  );
}

export default Card;
