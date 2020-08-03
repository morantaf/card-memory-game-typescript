import React from "react";
import styled from "styled-components";

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5%;

  padding: 5%;

  &.faceUp {
    background-color: white;
  }

  &.faceDown {
    background-color: #555;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  box-shadow: 3px 15px 15px 2px rgba(0, 0, 0, 0.5);
`;

interface CardProps {
  image: string;
  isFlipped: boolean;
  index: number;
  showCard(index: number): void;
  name: string;
  isMatched: boolean;
}

export default function Card({
  image,
  isFlipped,
  index,
  showCard,
  name,
  isMatched,
}: CardProps) {
  return (
    <Container>
      {isFlipped || isMatched ? (
        <Image className="faceUp">
          <img alt={`${name}-${index}`} src={image} />
        </Image>
      ) : (
        <Image className="faceDown" onClick={() => showCard(index)} />
      )}
    </Container>
  );
}
