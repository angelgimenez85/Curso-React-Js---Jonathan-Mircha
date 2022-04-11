import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    //Necesario bindear el contexto (llaves)
    //para utilizar el this dentro del los métodos
    //en componentes basados en clases
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar} key="1">
            +
          </button>
          <button onClick={this.restar} key="2">
            -
          </button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Properties itializers
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow functions
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar} key="1">
            +
          </button>
          <button onClick={this.restar} key="2">
            -
          </button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

const Button = ({ children, type, styleClass, handleClick, toolType }) => {
  return (
    <button
      className={styleClass}
      onClick={handleClick}
      type={type}
      data-tip={toolType}
    >
      {children}
    </button>
  );
};

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e.nativeEvent);
    console.log(msg);
  };
  render() {
    return (
      <div>
        <h3>Más sobre Eventos</h3>
        <button
          onClick={(e) => this.handleClick(e, 'Saludo desde evento click.')}
        >
          Saludar
        </button>
        <br />
        <br />
        {/*Evento personalizado*/}
        {/*<Boton onClick={(e)=> this.handleClick(e, 'Saludo desde evento click')}/>*/}
        <Boton
          myOnClick={(e) => this.handleClick(e, 'Saludo desde evento click')}
        />
        <br />
        <br />
        <Button
          type="button"
          children="Button Component"
          toolType="Button component"
          handleClick={(e) => this.handleClick(e, 'Saludo desde evento click')}
        />
      </div>
    );
  }
}
