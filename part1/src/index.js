import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.total}</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
