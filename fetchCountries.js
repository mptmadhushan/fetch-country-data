const axios = require('axios');
const fs = require('fs');

const url = 'https://restcountries.com/v3.1/all';

axios.get(url)
    .then(response => {
        const countries = response.data.slice(0, 15); // Get the first 15 countries
        fs.writeFileSync('countries.json', JSON.stringify(countries, null, 2), 'utf8');
        console.log('Countries data saved to countries.json');
    })
    .catch(error => {
        console.error('Error fetching countries data:', error);
    });