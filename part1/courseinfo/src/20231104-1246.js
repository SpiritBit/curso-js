import React from 'react'
import ReactDOM from 'react-dom/client'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age - 1

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Adolfo'
  const age = 55

  return (
    <>
      <h1>Greetings!</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
