import { useState } from "react"

const Button = ({handleClick, text}) =>{
  return <button onClick={handleClick}>{text}</button>
}

const Statistic = ({text, value}) => {
  return (
    <>
      <tbody>
        <tr>
          <td> {text}: {value}</td>
        </tr>
      </tbody>
    </>
  )
}
const Statistics = ({statistics}) => {
  const good= statistics[0]
  const neutral= statistics[1]
  const bad = statistics[2]
  const total = statistics[3]

  const average = () => (good - bad) / total;
  const positive = () => ((good * 100) / total) + '%'

  
  if(total ===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <table>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={total} />
      <Statistic text='average' value={average()} />
      <Statistic text='positive' value={positive()} />



    </table>
  )
  
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);


  const handleGood = () =>{
    setGood(good + 1)
    setTotal(total+1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
    setTotal(total+1)

  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
    setTotal(total+1)

  }




  return (
      <>
      
      <h1>Give feedback</h1>


      <Button handleClick={handleGood} text ='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Statistics statistics={[good, neutral, bad, total]} />
      </>
  )
}

export default App
