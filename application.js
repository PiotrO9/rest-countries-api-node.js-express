const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use("/css", express.static('css'));
app.use("/js", express.static('js'));

app.get('/', (req, res) => {
    
    get_country("https://restcountries.com/v3.1/all")
    .then((all_countries)=>{
        res.render('index', {all_countries: all_countries});
    });
});

app.get('/:country', (req, res) => {
    
});