import React from 'react';
import './Estilos.css';
import moduleStyles from './Estilos.module.css';
import './Estilos.scss';

export default function Estilos() {
  const myStyles = {
    borderRadius: '.5rem',
    margin: '2rem auto',
    maxWidth: '50%',
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos CSS en hoja externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: '.25rem', margin: '1rem' }}
      >
        Estilos CSS en línea (atributo style)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos CSS en línea (objeto aparte)
      </h3>
      <h3 className="bg-react">
        Agregando Normalize al index.css
        <br />
        <code>@import-normalize;</code>
      </h3>
      <h3>Hoja de estilos con Módulos</h3>
      <h4 className={moduleStyles.success}>Success</h4>
      <h4 className={moduleStyles.error}>Error</h4>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
