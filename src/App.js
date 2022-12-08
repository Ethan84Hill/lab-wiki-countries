import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
// import countries from './countries.json'
import axios from 'axios';
import { useState, useEffect } from 'react'



function App() {

  const [countriesArr, setCountriesArr] = useState([])

    useEffect(() => {
        console.log('hello from the countries api');
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            setCountriesArr(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [])



  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/" element={ <CountriesList countryData={countriesArr} /> } />
        <Route path="/:myParam" element={ <CountriesDetails /> } />
      </Routes>
      
    </div>
  );

}

export default App;
