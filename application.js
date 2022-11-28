const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use("/css", express.static('css'));
app.use("/js", express.static('js'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/country/:country', (req, res) => {
    (() => {
        // const searchParams = new URLSearchParams(window.location.search);
        const countryCode = req.params.country;
        if (!countryCode || countryCode == "undefined") {
            res.redirect('/');
        }
    
        const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
        fetch(API_URL_DETAIL)
            .then((res) => res.json())
            .then((country) => {
                if (!country) {
                    res.redirect('/');
                }
                
                country = {
                    capital: country.capital && country.capital[0],
                    population: country.population,
                    name: country.name.common,
                    nativeName: Object.values(country.name.nativeName)[0].official,
                    code: country.cioc,
                    region: country.region,
                    subregion: country.subregion,
                    flagUrl: country.flags.png,
                    currencies: Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", "),
                    languages: Object.values(country.languages).join(", "),
                    tld: country.tld[0],
                    borders: country.borders,
                };
                
                console.log(country + "123");
                res.render('details', { country: country });
                //renderCountryDetails(country);
            });
    })();
});

