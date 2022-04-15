import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionComponent from './components/MyFunctionComponent';
import Evento from './components/Evento';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';

function App() {
  return (
    <section>
      <hr />
      <MyClassComponent name={'Angel'} />
      <hr />
      <MyFunctionComponent name="Angel" />
      <hr />
      <Evento />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos />
      <hr />
      <EventosES6 />
      <hr />
      <EventosES7 />
      <hr />
      <MasSobreEventos />
      <Padre />
      <hr />
      <CicloVida />
      <hr />
      <AjaxApis />
      <hr />
      <ContadorHooks titulo="Seguidores" />
      <hr />
      <ScrollHooks />
      <hr />
      <RelojHooks />
      <hr />
      <AjaxHooks />
      <hr />
      <HooksPersonalizados />
      <hr />
      <Referencias />
      <hr />
      <Formularios />
    </section>
  );
}

render(<App />, document.getElementById('root'));
