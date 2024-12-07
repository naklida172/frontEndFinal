import React, { useState, useEffect } from "react";

let manualMinutes = 25; //временный таймер на 25 минут

const Timer = () => {
  const [time, setTime] = useState(manualMinutes * 60);
  const [isOnPause, setPauseState] = useState(true);

  useEffect(() => {
    let interval = null;

    if (!isOnPause && time > 0) { //проверка если время есть и не на паузе
      interval = setInterval(() => { //интервал в 1 секунду
        setTime((time) => time - 1);
      }, 1000);
    } else if (isOnPause && time !== 0) { //если время есть и на паузе
      clearInterval(interval); //остановить интервал
    }

    return () => clearInterval(interval); //остановить интервал
  }, [isOnPause, time]);

  const resetTimer = () => {
    setTime(manualMinutes * 60); //вернуть время к 25 минутам
    setPauseState(true); //поставить на паузу
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); 
    const seconds = time % 60; //остаток секунд после деления
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; //если секунд осталось x < 10 то будет '0x' 
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
