import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState('')
    useEffect(()=>{
        axios
          .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
          .then(response => {
            setWeather(response.data)
          })
    },[])
    if(weather !== ''){
        return (
            <>
                <h3>Weather in {capital}</h3>
                <p>Temperature: {weather.current.temperature}&#8451;</p>
                <img alt='weather' src={weather.current.weather_icons[0]}/>
                <p>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
            </>
        )
    }
    else{
        return (
            <>
                <p>Loading Weather Data...</p>
            </>
        )
    }
}

export default Weather