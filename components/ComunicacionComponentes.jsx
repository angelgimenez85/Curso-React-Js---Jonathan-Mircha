import React, { Component } from 'react';

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <Hijo mensaje="Mensaje para el hijo 1" />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 2"
        />
        <h4>{this.state.contador}</h4>
      </>
    );
  }
}

function Hijo({ mensaje, incrementarContador }) {
  return (
    <>
      <h3>{mensaje}</h3>
      <button onClick={incrementarContador}>Incrementar Contador</button>
    </>
  );
}
