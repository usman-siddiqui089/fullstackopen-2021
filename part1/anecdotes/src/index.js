import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const VoteCount = ({count}) => {
  return (
    <p>has {count} vote(s)</p>
  )
}
const Title = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}
const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [rand, setRand] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const setRandAnec = () => {
    const randNum = Math.floor(Math.random() * 6)
    setRand(randNum)
    setSelected(rand)
  }
  const setVoteCount = (index) => () => {
    const voteCount = [...votes]
    voteCount[index] += 1
    setVotes(voteCount)
  }
  const mostVotedAnecdote = () => {
    const arr = [...votes]
    const max = Math.max(...arr)
    const index = arr.indexOf(max)
    if(max === 0){
      return `No anecdote voted yet. Please vote.`
    }
    else {
      return (
        <>
          {anecdotes[index]}
          <VoteCount count={votes[index]}/>
        </>
      )
    }
  }
  return (
    <div>
      <Title text={'Anecdote of the day'}/>
      {anecdotes[selected]}
      <VoteCount count={votes[selected]}/>
      <Button text={'Vote'} handleClick={setVoteCount(selected)}/>&nbsp;
      <Button text={'Next Anecdote'} handleClick={setRandAnec}/>
      <Title text={'Anecdote with most votes'}/>
      {mostVotedAnecdote()}
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);
