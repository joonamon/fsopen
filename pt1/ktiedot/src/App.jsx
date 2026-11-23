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
// Now does its thing using "Part" components rather than by itself.
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
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header titleText={course} />
      <Content parts={[part1, part2, part3]} />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
    </div>
  )
}

export default App


