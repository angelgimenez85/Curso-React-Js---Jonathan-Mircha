import { Component } from 'react';
import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    //console.log(3, 'El componente "Reloj" ha sido eliminado del DOM.');
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    //console.log(0, 'El componente se inicializa, aún no está en el DOM.');
    this.state = {
      hora: new Date().toLocaleTimeString(),
      verReloj: false,
    };
    this.temporizador = null;
  }

  componentDidMount() {
    //console.log(1, 'El componente ya se encuentra en el DOM.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, 'El estado o las props del componente han cambiado.');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  tictac = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = (e) => {
    this.tictac();
    this.setState({ verReloj: true });
  };

  detener = (e) => {
    clearInterval(this.temporizador);
    this.setState({ verReloj: false });
  };

  render() {
    //console.log(4,'El componente se dibuja (o redibuja por algún cambio en el DOM).');
    return (
      <>
        <h2>Ciclo de Vida en Componentes de Clase</h2>
        {this.state.verReloj && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
