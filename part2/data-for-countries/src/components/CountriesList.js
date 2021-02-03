import React from 'react'

const CountriesList = ({countriesArr}) => {
    return (
        <>
            {countriesArr.map(item => <p key={item.name}>{item.name}</p>)}
        </>
    )
}

export default CountriesList