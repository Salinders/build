import { useState } from "react"

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

  let average = ((good - bad) / (good+bad+neutral)).toFixed(2)
  let positive = ((good) / (good+bad+neutral)).toFixed(2)


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>Statistics</h1>
      <p>good:{good} </p>
      <p>neutral:{neutral} </p>
      <p>bad: {bad}</p>
      <p>all:{good+bad+neutral} </p>
      <p>average:{average} </p>
      <p>positive: {positive}</p>


    </div>
  )
}

export default App
