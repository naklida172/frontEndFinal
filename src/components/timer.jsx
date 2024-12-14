import React, { useState, useEffect } from "react";

export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60; // остаток секунд после деления
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // если секунд осталось < 10, то будет '0x'
};

const Timer = ({ manualMinutes, onSectionComplete }) => {
  const [time, setTime] = useState(manualMinutes * 60);
  const [isOnPause, setPauseState] = useState(true);

  useEffect(() => {
    setTime(manualMinutes * 60);
  }, [manualMinutes]);

  useEffect(() => {
    let interval = null;

    if (!isOnPause && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }  else if (isOnPause) {
      clearInterval(interval); // остановить интервал
    }
    else if (time === 0) {
      clearInterval(interval);
      onSectionComplete();
    }

    return () => clearInterval(interval); // остановить интервал
  }, [isOnPause, time, onSectionComplete]);

  const resetTimer = () => {
    setTime(manualMinutes * 60);
    setPauseState(true);
  };

  return (
    <div>
      <div id="timer">{formatTime(time)}</div>
      <button onClick={() => setPauseState(!isOnPause)}>
        {isOnPause ? "Start" : "Pause"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
