// Using "p" instead of "props" here
// just to remind myself how it works.
const Header = (p) => {
  return (
    <h1>{p.titleText}</h1>
  )
}

// "Part" component to simplify "Content".
const Part = (props) => {
  return (
    <p>
      {props.topic} {props.numOfExers}
    </p>
  )
}

// This could be made to take any number of parts/exercises.
// Using fragment instead of div to keep the original structure.
// Does its thing using "Part" components rather than by itself.
const Content = (props) => {
  return (
    <>
      <Part topic={props.parts[0].name} numOfExers={props.parts[0].exercises} />
      <Part topic={props.parts[1].name} numOfExers={props.parts[1].exercises} />
      <Part topic={props.parts[2].name} numOfExers={props.parts[2].exercises} />
    </>
  )
}

// A sensible way of doing this would be to make it so that
// this can sum up any number of exercises given.
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}



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
      <Header titleText={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App


