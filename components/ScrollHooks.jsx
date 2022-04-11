import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log('Fase de Montaje de ScrollHooks');
    window.addEventListener('scroll', detectarScroll);
  }, []);

  useEffect(() => {
    //console.log('Fase de Actualización de scrollY');
  }, [scrollY]);

  useEffect(() => {
    return () => {
      //console.log('Fase de Desmontaje de ScrollHooks');
      window.removeEventListener('scroll', detectarScroll);
    };
  }, []);

  const detectarScroll = () => setScrollY(window.pageYOffset);

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}</p>
    </>
  );
}
