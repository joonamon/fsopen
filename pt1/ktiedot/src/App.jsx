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
  return ( //
    <>
      <Part topic={props.topics[0]} numOfExers={props.exers[0]} />
      <Part topic={props.topics[1]} numOfExers={props.exers[1]} />
      <Part topic={props.topics[2]} numOfExers={props.exers[2]} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header titleText={course} />
      <Content topics={[part1, part2, part3]} exers={[exercises1, exercises2, exercises3]} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App