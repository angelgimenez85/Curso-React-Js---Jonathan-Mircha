import React, { useState, useEffect } from 'react';

const Pokemon = ({ name, avatar }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  /*useEffect(() => {
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
              setPokemons((pokemons) => [...pokemons, pokemon]);
            })
            .catch(console.error);
        });
      })
      .catch(console.error);
  }, []);*/

  useEffect(() => {
    const getPokemons = async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      //console.log(json);
      json.results.forEach(async (el) => {
        const res = await fetch(el.url);
        const json = await res.json();
        //console.log(json);
        const pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    const url = 'https://pokeapi.co/api/v2/pokemon';
    getPokemons(url);
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Comoponentes con Hooks</h2>
      {pokemons === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => {
          return <Pokemon key={el.id} name={el.name} avatar={el.avatar} />;
        })
      )}
    </>
  );
}
