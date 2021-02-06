import React from 'react'

const Person = ({id,name,phone,onClickHandler}) => {
    return (
        <p>
            {name}&nbsp;{phone}&nbsp;
            <button value={id} onClick={onClickHandler}>Delete</button>
        </p>
    )
}

export default Person