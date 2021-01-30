import React from 'react'

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

export default Course