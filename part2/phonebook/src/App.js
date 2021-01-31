import React, { useState } from 'react'
import Title from './component/Title'
import Contacts from './component/Contacts'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'},
    ])
    const [newName, setNewName] = useState('')
    const updateNames = (event) => {
        setNewName(event.target.value)
    }
    const addContact = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
    }
    return (
      <>
        <Title text='Phonebook'/>
        <form onSubmit={addContact}>
            <div>
                Enter Name: <input value={newName} onChange={updateNames}/>
            </div><br />
            <button type='submit'>Save Contact</button>
        </form>
        <Title text='Contacts'/>
        <Contacts contacts={persons}/>
      </>
    )
}

export default App