import React from 'react'
import Person from './Person'

const Contacts = ({contacts,onClickHandler}) => {
    return (
        <>
            {contacts.map(contact => <Person key={contact.name} id={contact.id} name={contact.name} phone={contact.number} onClickHandler={onClickHandler}/>)}
        </>
    )
}

export default Contacts