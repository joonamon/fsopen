import { useState } from 'react'
import './App.css' // Being stylish results in better feedback

const Button = (props) => (
  <button className="feedback-button" onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.nor !== 0) {
    return (
      <div id="statistics">
        <p>ratings given: {props.nor}</p>
        <p>average rating: {props.ar.toFixed(2)}</p>
        <p>percent positive: {props.pp.toFixed(0)}%</p>
      </div>
    )
  }
  else {
    return (
      <div id="statistics">
        <p>(no feedback yet)</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const numberOfRatings = good+neutral+bad
  const averageRating = (1*good+0*neutral-1*bad)/numberOfRatings
  const percentPositive = good/numberOfRatings*100
  
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
      <Statistics nor={numberOfRatings} ar={averageRating} pp={percentPositive} />
    </div>
  )
}

export default App