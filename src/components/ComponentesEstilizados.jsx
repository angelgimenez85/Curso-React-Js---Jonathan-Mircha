import React from 'react';
import styled, { css } from 'styled-components';

const mainColor = '#db7093';
const mainAlphaColor80 = '#db709380';
const setTransitionTime = (time) => `all ${time} ease-in-out;`;
const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.color};
  color: ${({ color }) => color};
  color: ${({ color }) => color || '#000'};
  background-color: ${mainColor};
  transition: ${setTransitionTime('1s')};

  ${({isButton}) =>
    isButton &&
    css`
    margin: auto;
    max-width: 50%;
    border-radius: 0.25rem;
    cursor: pointer;
  `}
  
  &:hover {
    background-color: ${mainAlphaColor80}      
  }
`;

export default function ComponentesEstilizados() {


  return (
    <>
      <h2>Styled-Components</h2>
      <MyH3>Hola, soy un h3 estilizado</MyH3>
      <MyH3 color="#61dafb">Hola, soy un h3 estilizado</MyH3>
      <MyH3 isButton color="#ffffff">Soy un h3 estilizado como botón</MyH3>
    </>
  );
}
