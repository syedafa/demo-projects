import { useEffect, useState } from "react";

const Timer = ({
  setTOut,
  questionNumber,
  timer,
  setTimer,
  setTimeRunning,
}) => {
  console.log(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTOut, timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  if (timer <= 0) {
    setTimeRunning(false);
    setTOut(true);
  }
  return timer;
};

export default Timer;
