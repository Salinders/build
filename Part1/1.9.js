import { useState } from "react"
const Statistics = (props) => {
  if(props.All ===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <h3>Good: {props.good}</h3>
      <h3>Neutral: {props.neutral}</h3>
      <h3>Bad: {props.bad}</h3>
      <h3>All: {props.All}</h3>
      <h3>Average: {props.average}</h3>
      <h3>Positive: {props.positive}</h3>
    </div>
  )
  
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good + 1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
  }



  return (
    <div>
      <br/>
      
      <h1>Give feedback</h1>
      <br />

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <br/>

      <h1>Statistics</h1>

      <br />
      <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            All={good+neutral+bad}
            average = {((good-bad) / (good+bad+neutral)).toFixed(2)}
            positive = {((good) / (good+bad+neutral)).toFixed(2)}

      />




    </div>
  )
}

export default App
