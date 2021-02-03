import React from 'react'
import Language from './Language'

const Languages = ({array}) => {
    return (
        <>
            <h3>Languages</h3>
            {array.map(item => {
                return (
                    <Language key={item.name} languageName={item.name}/>
                )
            })}
        </>
    )
}

export default Languages