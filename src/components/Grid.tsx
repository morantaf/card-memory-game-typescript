import React, { useState, useEffect } from "react";
import apex from "../images/icons8-apex-legends-100.png";
import assassin from "../images/icons8-assassins-creed-100.png";
import warfare from "../images/icons8-call-of-duty-modern-warfare-100.png";
import warzone from "../images/icons8-call-of-duty-warzone-100.png";
import counterStrike from "../images/icons8-counter-strike-100.png";
import finalFantasy from "../images/icons8-final-fantasy-xiv-100.png";
import fortnite from "../images/icons8-fortnite-100.png";
import gta from "../images/icons8-gta-5-100.png";
import Card from "./Card";
import styled from "styled-components";

interface GridProps {
  wrongAttempts: number;
  setWrongAttempts(attempts: number): number | void;
  setGameWon(gameFinished: boolean): boolean | void;
}

interface Card {
  name: string;
  imgUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Container = styled.ul`
  margin: auto;
  width: 650px;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 32px;
  justify-content: space-between;
  border-radius: 5%;
  background: #55b9f3;
  box-shadow: 3px 15px 15px 2px rgba(0, 0, 0, 0.15);
`;

const StyledList = styled.li`
  height: 100px;
  width: 100px;
  padding: 3%;
`;

const cardsList = [
  {
    name: "apex",
    imgUrl: apex,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "assassin",
    imgUrl: assassin,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "warfare",
    imgUrl: warfare,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "warzone",
    imgUrl: warzone,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "counter",
    imgUrl: counterStrike,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "final",
    imgUrl: finalFantasy,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "fortnite",
    imgUrl: fortnite,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "gta",
    imgUrl: gta,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "apex",
    imgUrl: apex,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "assassin",
    imgUrl: assassin,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "warfare",
    imgUrl: warfare,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "warzone",
    imgUrl: warzone,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "counter",
    imgUrl: counterStrike,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "final",
    imgUrl: finalFantasy,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "fortnite",
    imgUrl: fortnite,
    isFlipped: false,
    isMatched: false,
  },
  {
    name: "gta",
    imgUrl: gta,
    isFlipped: false,
    isMatched: false,
  },
];

export default function Grid({
  setWrongAttempts,
  wrongAttempts,
  setGameWon,
}: GridProps) {
  function shuffle(array: Card[]): Card[] {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const shuffledCardsList = shuffle(cardsList);

  const [displayedCards, setDisplayedCards] = useState<Card[]>(
    shuffledCardsList
  );

  const [allFlippedCards, setAllFlippedCards] = useState<Card[] | []>([]);

  const showCard = (indexOfClickedCard: number) => {
    if (allFlippedCards.length <= 1) {
      const flippedCard = displayedCards.filter(
        (card, index) => index === indexOfClickedCard
      );

      setAllFlippedCards([...allFlippedCards, flippedCard[0]]);

      setDisplayedCards(
        displayedCards.map((card, index) =>
          index === indexOfClickedCard
            ? { ...card, isFlipped: !card.isFlipped }
            : card
        )
      );
    }
  };

  const checkFlippedCards = (cardOne: Card, cardTwo: Card) => {
    if (cardOne.name === cardTwo.name) {
      setDisplayedCards(
        displayedCards.map((card) =>
          card.name === cardOne.name
            ? {
                ...card,
                isMatched: true,
                isFlipped: false,
              }
            : card
        )
      );
    } else {
      setWrongAttempts(wrongAttempts + 1);
      setDisplayedCards(
        displayedCards.map((card) =>
          card.isFlipped ? { ...card, isFlipped: false } : card
        )
      );
    }
    setAllFlippedCards([]);
  };

  useEffect(() => {
    const cardsInGame = displayedCards.filter(
      (card) => card.isMatched !== true
    );
    if (cardsInGame.length === 0) {
      setGameWon(true);
    }
  }, [displayedCards]);

  useEffect(() => {
    if (allFlippedCards.length === 2) {
      setTimeout(() => {
        checkFlippedCards(allFlippedCards[0], allFlippedCards[1]);
      }, 500);
    }
  }, [allFlippedCards]);

  return (
    <Container>
      {displayedCards.map((card, index) => (
        <StyledList>
          <Card
            key={index}
            name={card.name}
            image={card.imgUrl}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            index={index}
            showCard={showCard}
          />
        </StyledList>
      ))}
    </Container>
  );
}
