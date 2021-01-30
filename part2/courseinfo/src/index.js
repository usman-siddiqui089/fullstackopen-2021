import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Total = ({ course }) => {
  const parts = [...course.parts]
  const total = parts.reduce((sum,part) => {
    sum += part.exercises
    return sum
  },0)
  return(
    <h3>total of {total} exercises</h3>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  const parts = [...course.parts]
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </>
  )
}

const Course = ({courses}) => {
  return (
    <>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
          </div>
        )
      })}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Title text={'Web Development Curriculum'}/>
      <Course courses={courses} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
