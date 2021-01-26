import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const Statistics = ({value}) => {
  const total = value.good + value.neutral + value.bad
  const average = () => {
    return (total === 0) ? 0 : (value.good - value.bad) / total
  }
  const positive = () => {
    return (total===0) ? 0 : (value.good / total) * 100
  }
  return (
    <>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>All: {total}</p>
      <p>Average: {average()}</p>
      <p>Positive: {positive()}%</p>
    </>
  )
}
const App = () => {
  const [feedack, setCount] = useState({
    good : 0,
    neutral : 0,
    bad : 0,
  })
  const setFeedbackCount = (type) => () => {
    let newCount = {}
    if(type === 'good'){
      newCount = {
        ...feedack,
        good: feedack.good + 1
      }
    }
    else if(type === 'neutral'){
      newCount = {
        ...feedack,
        neutral: feedack.neutral + 1
      }
    }
    else{
      newCount = {
        ...feedack,
        bad: feedack.bad + 1
      }
    }
    if(newCount != {}){
      setCount(newCount)
    }
  }
  return (
    <>
      <Title text={'Give Feedback'}/>
      <Button text={'Good'} handleClick={setFeedbackCount('good')}/>&nbsp;
      <Button text={'Neutral'} handleClick={setFeedbackCount('neutral')}/>&nbsp;
      <Button text={'Bad'} handleClick={setFeedbackCount('bad')}/>
      <br />
      <Title text={'Statistics'}/>
      <Statistics value={feedack}/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
