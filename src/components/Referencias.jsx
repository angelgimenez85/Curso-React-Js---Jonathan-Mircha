import React, { useRef } from 'react';

export default function Referencias() {
  const refMenu = useRef();
  const refMenuBtn = useRef();

  const handleToggleMenu = (e) => {
    //const $menu = document.getElementById('menu');

    /*if (e.target.textContent === 'Menú') {
      e.target.textContent = 'Cerrar';
      $menu.style.display = 'block';
    } else {
      e.target.textContent = 'Menú';
      $menu.style.display = 'none';
    }*/

    if (refMenuBtn.current.textContent === 'Menú') {
      refMenuBtn.current.textContent = 'Cerrar';
      refMenu.current.style.display = 'block';
    } else {
      refMenuBtn.current.textContent = 'Menú';
      refMenu.current.style.display = 'none';
    }
  };
  return (
    <>
      <h2>Referencias</h2>
      <button id="btn-menu" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: 'none' }}>
        <a href="#">Sección1</a>
        <br />
        <a href="#">Sección2</a>
        <br />
        <a href="#">Sección3</a>
        <br />
        <a href="#">Sección4</a>
        <br />
        <a href="#">Sección5</a>
        <br />
      </nav>
    </>
  );
}
