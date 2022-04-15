import React, { Component } from 'react';

const Login = () => {
  return <h3>Usuario logueado</h3>;
};

const Logout = () => {
  return <h3>Usuario no logueado</h3>;
};

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
