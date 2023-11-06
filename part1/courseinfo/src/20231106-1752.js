import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Final = ({ values }) => {
  return (
    <ul>
      <li>Good: {values.good}</li>
      <li>Neutral: {values.neutral}</li>
      <li>Bad: {values.bad}</li>
    </ul>
  )
}

const Statistics = ({ values }) => {
  const all = values.good + values.neutral + values.bad

  if (all > 0) {
    const avg = ((values.good * 1) + (values.bad * -1)) / all
    const pos = (values.good / all).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });

    return (
      <>
        <h1>Statistics</h1>

        <ul>
          <li>All: {all}</li>
          <li>Average: {avg}</li>
          <li>Positive: {pos}</li>
        </ul>
      </>
    )
  }
}

const App = () => {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 })

  const addValueTo = (itemName, itemValue) => {
    let newObject = values

    switch (itemName) {
      case 'good':
        newObject = { ...newObject, good: itemValue }
        break;

      case 'neutral':
        newObject = { ...newObject, neutral: itemValue }
        break;

      case 'bad':
        newObject = { ...newObject, bad: itemValue }
        break;

      default:
        break;
    }

    return () => setValues(newObject)
  }

  return (
    <>
      <div>
        <Title />
        <Button handleClick={addValueTo('good', values.good + 1)} text="good" />
        <Button handleClick={addValueTo('neutral', values.neutral + 1)} text="neutral" />
        <Button handleClick={addValueTo('bad', values.bad + 1)} text="bad" />
      </div>
      <div>
        <Final values={values} />
      </div>
      <div>
        <Statistics values={values} />
      </div>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
