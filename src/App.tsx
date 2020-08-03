import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Stats from "./components/Stats";
import styled from "styled-components";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import TimeInterface from "./components/TimeInterface";

const Title = styled.h1`
  margin: auto;
  width: 650px;
  text-align: center;
`;

function App() {
  const [time, setTime] = useState<TimeInterface>({ minutes: 0, seconds: 0 });
  const [wrongAttempts, setWrongAttempts] = useState<number>(0);
  const [interv, setInterv] = useState<number>();
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gridKey, setGridKey] = useState<number>(0);

  let updatedSeconds = time.seconds,
    updatedMinutes = time.minutes;

  const resetGame = async () => {
    await setTime({ minutes: 0, seconds: 0 });
    updatedSeconds = 0;
    updatedMinutes = 0;
    setGameWon(false);
    setWrongAttempts(0);
    setGridKey(gridKey + 1);
    await start();
  };

  const chrono = () => {
    if (updatedSeconds === 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }
    updatedSeconds++;

    setTime({ minutes: updatedMinutes, seconds: updatedSeconds });
  };

  const start = () => {
    chrono();
    setInterv(setInterval(chrono, 1000));
  };

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    clearInterval(interv);
  }, [gameWon]);

  return (
    <div className="App">
      {gameWon ? (
        <Popup
          wrongAttempts={wrongAttempts}
          time={time}
          resetGame={resetGame}
        />
      ) : null}
      <Title>Card Memory Game</Title>
      <Stats wrongAttempts={wrongAttempts} time={time} />
      <Grid
        key={gridKey}
        setWrongAttempts={setWrongAttempts}
        wrongAttempts={wrongAttempts}
        setGameWon={setGameWon}
      />
      <Footer />
    </div>
  );
}

export default App;
