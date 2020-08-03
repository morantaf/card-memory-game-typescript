import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";

const Container = styled.div`
  height: 100px;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3%;
`;

export default function Footer() {
  return (
    <Container>
      <TextDiv>
        <p>
          <FaGithub /> Link to the <a>Github repository</a>
        </p>
        <p>|</p>
        <p>
          <FaSmile /> Made by Moranta Fall
        </p>
        <p>|</p>
        <p>
          <FaExternalLinkAlt /> icons from{" "}
          <a href="https://icons8.com/">icons8</a>
        </p>
      </TextDiv>
    </Container>
  );
}
