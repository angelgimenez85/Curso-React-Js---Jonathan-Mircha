import React, { useState } from 'react';

export default function Formularios() {
  /*const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('');
  const [lenguaje, setLenguaje] = useState('');
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
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
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">-Selecciona uno-</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <br />
        <label htmlFor="terminos">Acepto los términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );*/

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" onChange={handleChange} />

        <p>Elige tu Sabor Js Favorito</p>

        <label htmlFor="vanilla">Vanilla</label>
        <input type="radio" id="vanilla" name="sabor" value="vanilla" />
        <br />

        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="svelte">Svelte</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <br />
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" defaultValue="" onChange={handleChange}>
          <option value="">-Selecciona uno-</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <br />
        <label htmlFor="terminos">
          Acepto los <a href="#">términos y condiciones</a>
        </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
