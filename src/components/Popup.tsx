import React from "react";
import styled from "styled-components";
import TimeInterface from "./TimeInterface";

const PositionSetter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  border: solid 1px;
  border-radius: 5px;
  width: 650px;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 8%;
  margin: auto;
  background-color: white;
  padding: 1%;
`;

const StyledText = styled.h1`
  text-align: center;
`;

const StyledButton = styled.button`
  background: #55b9f3;
  color: white;
  font-size: 1em;
  margin-bottom: 1em;
  padding: 0.7em 1em;
  border: 2px solid;
  border-radius: 7px;
  width: 33%;
  position: relative;
  left: 33%;
  cursor: pointer;
  &:hover {
    background: white;
    color: #55b9f3;
  }
`;

interface PopupProps {
  wrongAttempts: number;
  time: TimeInterface;
  resetGame: () => void;
}

export default function Popup({ wrongAttempts, time, resetGame }: PopupProps) {
  return (
    <PositionSetter>
      <Container>
        <StyledText>
          {" "}
          <i>
            Congratulation ! You won in{" "}
            {time.minutes >= 10 ? time.minutes : "0" + time.minutes}:
            {time.seconds >= 10 ? time.seconds : "0" + time.seconds} with{" "}
            {wrongAttempts} wrong attempts {":)"}
          </i>
        </StyledText>
        <StyledButton onClick={resetGame}>Retry</StyledButton>
      </Container>
    </PositionSetter>
  );
}
