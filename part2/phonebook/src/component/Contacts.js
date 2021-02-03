import React from 'react'
import Person from './Person'

const Contacts = ({contacts}) => {
    return (
        <>
            {contacts.map(contact => <Person key={contact.name} name={contact.name} phone={contact.number}/>)}
        </>
    )
}

export default Contacts