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
  return (
    <>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
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
      <Button text={'Good'} handleClick={setFeedbackCount('good')}/>
      <Button text={'Neutral'} handleClick={setFeedbackCount('neutral')}/>
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
