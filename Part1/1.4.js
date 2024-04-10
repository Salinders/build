/* eslint-disable react/jsx-key */
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
  )
}

const Header = (props) =>{
  console.log(props)

  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  const lists = props.parts.map((item, index) => (
    <div key={index}>
      <p>{item.name}: {item.exercises}</p>
    </div>
  ));

  return lists;
};

const Total = (props) => {
  const score = props.parts.reduce((total,item)=> total + item.exercises,0)

    return(
      <div>
        <p>Total no of exercises: {score}</p>
      </div>
    )
  
}
export default App
