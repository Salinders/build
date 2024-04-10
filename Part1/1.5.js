/* eslint-disable react/jsx-key */
const App =() => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
}

return (
    <div>
      <h1>{course.name} </h1>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}



const Content = (props) => {
  console.log(props);
  const lists = props.course.parts.map((item, index) => (
    <div key={index}>
      <p>{item.name}: {item.exercises}</p>
    </div>
  ));

  return lists;
};

const Total = (props) => {
  const score = props.course.parts.reduce((total,item)=> total + item.exercises,0)

    return(
      <div>
        <p>Total no of exercises: {score}</p>
      </div>
    )
  
}
export default App
