import React, { Component } from 'react';
import data from '../helpers/data.json';

const ElementoLista = (props) => {
  return (
    <li>
      <a href={props.data.web} target="_blank">
        {props.data.name}
      </a>
    </li>
  );
};

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado Elementos</h2>
        <h3>Estaciones del año</h3>
        <ul>
          {this.state.seasons.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} data={el} />
          ))}
        </ul>
      </div>
    );
  }
}
