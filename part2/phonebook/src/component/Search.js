import React from 'react'

const Search = ({currentVal, onChangeHandler}) => {
    return (
        <>
            Search Contacts: <input value={currentVal} onChange={onChangeHandler}/>
        </>
    )
}

export default Search