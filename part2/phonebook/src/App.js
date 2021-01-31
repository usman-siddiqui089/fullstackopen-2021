import React, { useState } from 'react'
import Title from './component/Title'
import Contacts from './component/Contacts'
import Search from './component/Search'
import NewPersonForm from './component/NewPersonForm'
import DisplayContacts from './component/DisplayContacts'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '1-222-332-1111'
        },
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [searchVal, setSearchVal] = useState('')
    const updateNames = (event) => {
        setNewName(event.target.value)
    }
    const updatePhone = (event) => {
        setNewPhone(event.target.value)
    }
    const searchItem = (event) => {
        setSearchVal(event.target.value)
    }
    const addContact = (event) => {
        event.preventDefault()
        const isFound = persons.find(person => {
            return (person.name === newName || person.phone === newPhone) ? true : false
        })
        if(isFound){
            alert(`This person name or phone is already present in phonebook. Please try new.`)
        }
        else{
            const newPerson = {
                name: newName,
                phone: newPhone
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewPhone('')
        }
    }
    const displayContacts = () => {
        if (searchVal !== ''){
            const searchResult = persons.filter(person => (person.name.toLowerCase().includes(searchVal) || person.phone.includes(searchVal)))
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
        <NewPersonForm onSubmitHandler={addContact} nameVal={newName} phoneVal={newPhone} onChangeName={updateNames} onChangePhone={updatePhone}/>
        <Title text='Contacts'/>
        <DisplayContacts showData={displayContacts()}/>
      </>
    )
}

export default App