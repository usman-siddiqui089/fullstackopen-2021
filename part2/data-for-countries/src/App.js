import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Search from './components/Search'
import Country from './components/Country'
import CountriesList from './components/CountriesList'
import Display from './components/Display'
import Weather from './components/Weather'

const App = () => {
  const [searchVal, setSearchVal] = useState('')
  const [countriesList, setCountriesList] = useState([])
  const updateSearch = (event) => {
    setSearchVal(event.target.value)
  }
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        setCountriesList(response.data)
      })
  },[])
  const displayResults = () => {
    if(searchVal !== ''){
      const list = countriesList.filter(country => country.name.toLowerCase().includes(searchVal.toLowerCase()))
      if(list.length === 0){
        return(
          <p>No result found! Please try again.</p>
        )
      }
      else if(list.length > 10){
        return (
          <p>Too many matches, please specify another filter</p>
        )
      }
      else if(list.length === 1){
        const country = list[0]
        return (
          <>
            <Country name={country.name} capital={country.capital} population={country.population} languagesArr={country.languages} imageSrc={country.flag}/>
            <Weather capital={country.capital}/>
          </>
        )
      }
      else{
        return (
          <CountriesList countriesArr={list} onClickHandler={showResult}/>
        )
      }
    }
    else{
      return (
        <p>Search any country to see its details</p>
      )
    }
  }
  const showResult = (event) => {
    setSearchVal(event.target.value)
  }
  return (
    <>
      <Title text='Countries'/>
      <Search currentVal={searchVal} onChangeHandler={updateSearch}/>
      <Display data={displayResults()}/>
    </>
  )
}

export default App;
