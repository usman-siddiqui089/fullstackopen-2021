import React from 'react'
import Person from './Person'

const Contacts = ({contacts,onClickHandler}) => {
    if(contacts.length !== 0){
        return (
            <>
                {contacts.map(contact => <Person key={contact.name} id={contact.id} name={contact.name} phone={contact.number} onClickHandler={onClickHandler}/>)}
            </>
        )
    }
    else{
        return (
            <p>No contacts found in the Phonebook. Please add first.</p>
        )
    }
}

export default Contacts