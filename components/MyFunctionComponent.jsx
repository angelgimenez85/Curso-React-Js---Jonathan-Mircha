import React from 'react';

const MyFunctionComponent = (props) => {
  return (
  <div>
    <h2>Componente Funcional</h2>
    <p>Hola {props.name}, soy MyFunctionComponent!!</p>
  </div>);
};

export default MyFunctionComponent;