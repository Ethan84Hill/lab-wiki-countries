import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import countries from '../countries.json'
import CountriesList from './CountriesList'


function CountriesDetails() {

    let { myParam } = useParams()
    const selectedCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === myParam
    })


    return (
        <div className="col-7" >
            <h1>{ selectedCountry.name.common }</h1>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Capital: </td>
                        <td>{ selectedCountry.capital }</td>
                    </tr>
                    <tr>
                        <td>Region: </td>
                        <td>{ selectedCountry.region }</td>
                    </tr>
                    <tr>
                        <td>2 - 3 Digit Code: </td>
                        <td>{ selectedCountry.alpha2Code } { selectedCountry.alpha3Code }</td>
                    </tr>
                    <tr>
                        <td>Area: </td>
                        <td>{ selectedCountry.area }</td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default CountriesDetails;