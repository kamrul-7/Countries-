import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, area, population, region, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" srcset="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;