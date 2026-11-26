import { useState } from 'react'
import './App.css' // Being stylish results in better feedback

const Button = (props) => {
  return (
    <button className="feedback-button" onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1 className="custom-heading">feedback buttons</h1>
        <Button onClick={() => setGood(good+1)} text="good" />
        <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
        <Button onClick={() => setBad(bad+1)} text="bad" />
      <h1 className="custom-heading">feedback given</h1>
        <p className="fb-count">good: {good}</p>
        <p className="fb-count">neutral: {neutral}</p>
        <p className="fb-count">bad: {bad}</p>
    </div>
  )
}

export default App