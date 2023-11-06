import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Display = ({counter}) => {
  return (
    <h1>{counter}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) =>  {
    return () => setValue(newValue)
  }

  return (
    <div>
      <Display counter = {value} />
      <div>
        <Button handleClick={setToValue(1000)} text="thousand" />
        <Button handleClick={setToValue(0)} text="reset" />
        <Button handleClick={setToValue(value+1)} text="increment" />
      </div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
