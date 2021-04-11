import React from 'react'

const Header = (props) => {
    return (
    <div>
      <h1>{props.course}</h1>
      </div>
  )
}

const Part = (props) => {
    return (
    <div>
        <p>{props.part}</p>
        <p>{props.exercise}</p>
        <hr />
    </div>
    )
}

const Content = (props) => {
    return (
    <div>
        <Part part={props.exercise[0].name} exercise={props.exercise[0].exercises} />
        <Part part={props.exercise[1].name} exercise={props.exercise[1].exercises} />
        <Part part={props.exercise[2].name} exercise={props.exercise[2].exercises} />
    </div>
  )
}

const Total = (props) => {
    return (
    <div>
        <p>Total number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
      </p>
      </div>
  )
}

const App = () => {
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
      <Header course={course.name} />
      <Content exercise={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App