import React, { Component } from 'react';

const Pokemon = ({ name, avatar }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            })
            .catch(console.error);
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Comoponentes de Clase</h2>
        {this.state.pokemons === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el) => {
            return <Pokemon key={el.id} name={el.name} avatar={el.avatar} />;
          })
        )}
      </>
    );
  }
}
