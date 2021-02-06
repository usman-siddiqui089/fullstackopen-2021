import React, { useState, useEffect } from 'react'
import personService from './services/persons'
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
        personService
            .getAll()
            .then(initialPersonList => {
                setPersons(initialPersonList)
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
    const updateContact = (id) => {
        const newPerson = {
            name: newName,
            number: newNumber
        }
        personService
            .update(id,newPerson)
            .then(changedPerson => {
                setPersons(persons.map(p => (p.id !== id) ? p : changedPerson))
                setNewName('')
                setNewNumber('')
            })
    }
    const addContact = (event) => {
        event.preventDefault()
        const isPersonDuplicate = persons.find(person => (person.name === newName && person.number === newNumber) ? true : false)
        const isPhoneDuplicate = persons.find(person => (person.name !== newName && person.number === newNumber) ? true : false)
        const isNameDuplicate = persons.find(person => (person.name === newName && person.number !== newNumber) ? true : false)
        if(isPersonDuplicate){
            alert(`This person name or phone is already present in phonebook. Please try new.`)
        }
        else if(isPhoneDuplicate){
            const confirmation = window.confirm(`'${newNumber}' is already added to phonebook, replace the old name with a new name?`)
            if(confirmation){
                const person = persons.find(person => person.number === newNumber)
                updateContact(person.id)
            }
        }
        else if(isNameDuplicate){
            const confirmation = window.confirm(`'${newName}' is already added to phonebook, replace the old number with a new number?`)
            if(confirmation){
                const person = persons.find(person => person.name === newName)
                updateContact(person.id)
            }
        }
        else{
            const newPerson = {
                name: newName,
                number: newNumber
            }
            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }
    const displayContacts = () => {
        if (searchVal !== ''){
            const searchResult = persons.filter(person => (person.name.toLowerCase().includes(searchVal) || person.number.includes(searchVal)))
            if(searchResult.length !== 0){
                return (
                    <Contacts contacts={searchResult} onClickHandler={deleteContact}/>
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
                <Contacts contacts={persons} onClickHandler={deleteContact}/>
            )
        }
    }
    const deleteContact = (event) => {
        const id = parseInt(event.target.value)
        const person = persons.find(person => person.id === id)
        const confirmation = window.confirm(`Delete ${person.name}?`)
        if(confirmation){
            personService
            .deleteContact(id)
            .then(() => {
                setPersons(persons.filter(p => p.id !== id))
            })
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