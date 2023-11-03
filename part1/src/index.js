import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <>
      <p>Hola {props.name}! Tienes {props.age} años</p>
    </>
  )
}

const App = () => {
  return (
    <>
      <h1>Saludos</h1>
      <Hello name="Adolfo" age="55"/>
    </>
  )}

ReactDOM.render(<App />, document.getElementById('root'));