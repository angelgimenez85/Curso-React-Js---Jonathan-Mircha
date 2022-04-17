import React from 'react';
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

const mainColor = '#db7093';
const mainAlphaColor80 = '#db709380';

const setTransitionTime = (time) => `all ${time} ease-in-out;`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.color};
  color: ${({ color }) => color};
  color: ${({ color }) => color || '#000'};
  background-color: ${mainColor};
  transition: ${setTransitionTime('1s')};
  animation: ${fadein} 2s ease-out;

  ${({ isButton }) =>
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

const light = {
  color: '#222',
  bgColor: '#DDD',
};

const dark = {
  color: '#DDD',
  bgColor: '#222',
};

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;

// Atributos heredados
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`;

//Atributos globales (iría en index o App)
const GlobalStyle = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
`;

export default function ComponentesEstilizados() {
  return (
    <>
      <GlobalStyle/>
      <h2>Styled-Components</h2>
      <MyH3>Hola, soy un h3 estilizado</MyH3>
      <MyH3 color="#61dafb">Hola, soy un h3 estilizado</MyH3>
      <MyH3 isButton color="#ffffff">
        Soy un h3 estilizado como botón
      </MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <BoxRounded>Soy una caja light redondeada</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <BoxRounded>Soy una caja dark redondeada</BoxRounded>
      </ThemeProvider>
    </>
  );
}
