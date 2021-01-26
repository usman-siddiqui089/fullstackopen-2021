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
const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({feedback}) => {
  const total = feedback.good + feedback.neutral + feedback.bad
  const average = () => {
    return (total === 0) ? 0 : (feedback.good - feedback.bad) / total
  }
  const positive = () => {
    return (total===0) ? 0 : `${(feedback.good / total) * 100}%`
  }
  if(total === 0){
    return (
      <p>No feedback given yet :(</p>
    )
  }
  else{
    return (
      <>
        <table>
          <tbody>
            <Statistic text={'Good'} value={feedback.good}/>
            <Statistic text={'Neutral'} value={feedback.neutral}/>
            <Statistic text={'Bad'} value={feedback.bad}/>
            <Statistic text={'All'} value={total}/>
            <Statistic text={'Average'} value={average()}/>
            <Statistic text={'Positive'} value={positive()}/>
          </tbody>
        </table>
      </>
    )
  }
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
    if(newCount !== {}){
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
      <Statistics feedback={feedack}/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
