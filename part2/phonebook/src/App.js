import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './component/Title'
import Contacts from './component/Contacts'
import Search from './component/Search'
import NewPersonForm from './component/NewPersonForm'
import DisplayContacts from './component/DisplayContacts'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchVal, setSearchVal] = useState('')
    useEffect(()=>{
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    },[])
    const updateNames = (event) => {
        setNewName(event.target.value)
    }
    const updatePhone = (event) => {
        setNewNumber(event.target.value)
    }
    const searchItem = (event) => {
        setSearchVal(event.target.value)
    }
    const addContact = (event) => {
        event.preventDefault()
        const isFound = persons.find(person => {
            return (person.name === newName || person.number === newNumber) ? true : false
        })
        if(isFound){
            alert(`This person name or phone is already present in phonebook. Please try new.`)
        }
        else{
            const newPerson = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
    }
    const displayContacts = () => {
        if (searchVal !== ''){
            const searchResult = persons.filter(person => (person.name.toLowerCase().includes(searchVal) || person.number.includes(searchVal)))
            if(searchResult.length !== 0){
                return (
                    <Contacts contacts={searchResult}/>
                )
            }
            else{
                return (
                    <p>Sorry! No contact found</p>
                )
            }
        }
        else{
            return(
                <Contacts contacts={persons}/>
            )
        }
    }
    return (
      <>
        <Title text='Phonebook'/>
        <Search currentVal={searchVal} onChangeHandler={searchItem}/>
        <Title text='Add new contact'/>
        <NewPersonForm onSubmitHandler={addContact} nameVal={newName} phoneVal={newNumber} onChangeName={updateNames} onChangePhone={updatePhone}/>
        <Title text='Contacts'/>
        <DisplayContacts showData={displayContacts()}/>
      </>
    )
}

export default App