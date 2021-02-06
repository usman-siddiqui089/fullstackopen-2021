import React from 'react'
import Languages from './Languages'

const Country = ({name,capital,population,languagesArr,imageSrc}) => {
    return (
        <>
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <Languages array={languagesArr}/><br />
            <img style={{width: '120px', height: '120px'}} src={imageSrc} alt='country'></img>
        </>
    )
}

export default Country