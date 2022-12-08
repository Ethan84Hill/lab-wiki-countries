import { Routes, Route, Link } from 'react-router-dom'
import countries from '../countries.json'


function CountriesList(props) {
    return (
        <div>
            {props.countryData.map((country) => (
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                        {country.name.official}
                    </Link>
                </div>
            ))}
            
        </div>
    )
}

export default CountriesList;