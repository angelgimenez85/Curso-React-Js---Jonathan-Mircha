import React, { useState } from 'react';

export default function Formularios() {
  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('');
  return (
    <>
      <h2>Formularios</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <p>Elige tu Sabor Js Favorito</p>

        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          defaultChecked
          onChange={(e) => setSabor(e.target.value)}
        />
        <br />

        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <br />

        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <br />

        <label htmlFor="svelte">Svelte</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <br />

        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <br />
      </form>
    </>
  );
}
