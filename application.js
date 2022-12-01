const express = require('express');
const app = express();
app.listen(3000);
const { get_country } = require('./lib/home_countries');

app.set('view engine', 'ejs');
app.use("/css", express.static('css'));
app.use("/js", express.static('js'));

app.get('/', (req, res) => {
    get_country("https://restcountries.com/v3.1/all")
    .then((all_countries)=>{
        res.render('index', { all_countries: all_countries });
    });
});

app.get('/country/:country', (req, res) => {
    get_country(`https://restcountries.com/v3.1/name/${req.params.country}`)
    .then((country) => {
        res.render('details', { country: country[0] });
    });
});

app.get('/countryAlpha/:country', (req, res) => {
    get_country(`https://restcountries.com/v3.1/alpha/${req.params.country}`)
    .then((country) => {
        res.render('details', { country: country[0] });
    });
});

app.get('/searchCountry/:country', (req, res) => {
    get_country(`https://restcountries.com/v3.1/name/${req.params.country.toLocaleLowerCase()}`)
    .then((country) => {
        if(country.status)
        {
            res.redirect("/");
        }

        res.render('details', { country: country[0] });
    });
});

app.get('/region/:region', (req, res) => {
    let region = req.params.region.toLocaleLowerCase();
    get_country(`https://restcountries.com/v3.1/region/${region}`)
    .then((all_countries)=>{
        res.render('index', { all_countries: all_countries });
    });
});