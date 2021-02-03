import React from 'react'

const CountriesList = ({countriesArr, onClickHandler}) => {
    return (
        <>
            {countriesArr.map(item => {
                return (
                    <div key={item.name}>
                        {item.name}&nbsp;<button value={item.name} onClick={onClickHandler}>Show Details</button>
                    </div>
                )
            })}
        </>
    )
}

export default CountriesList