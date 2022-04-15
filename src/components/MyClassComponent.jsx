import React, { Component } from 'react';

export default class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }
  render() {
    return (
      <div>
        <h2>Componente de Clase</h2>
        <p>Hola {this.state.name}, soy MyClassComponent!!</p>
      </div>
    );
  }
}
