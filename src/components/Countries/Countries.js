import React, { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Travelling Around The World</h2>
            <h5>Found Countries: {countries.length}</h5>
        </div>
    );
};

export default Countries;