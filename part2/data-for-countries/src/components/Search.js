import React from 'react'

const Search = ({currentVal, onChangeHandler}) => {
    return (
        <div>
            Find Country: <input value={currentVal} onChange={onChangeHandler}/>
        </div>
    )
}

export default Search