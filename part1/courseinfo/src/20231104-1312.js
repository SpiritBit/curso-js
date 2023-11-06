import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Display = ({counter}) => <div><h1>{counter}</h1></div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const increaseOne = () => setCounter(counter + 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseOne} text="Pica" /> - <Button handleClick={reset} text="Reset" />
    </div>
  )
}

let counter= 1

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App counter={counter} />
  </React.StrictMode>
);
