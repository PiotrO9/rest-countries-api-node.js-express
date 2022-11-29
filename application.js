const express = require('express');
const { get_country } = require('./lib/home_countries');
const app = express();
app.listen(3000);
var http = require('http').createServer(app);
var io = require('socket.io')(http);

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

io.on('click', () => {
    console.log("Clicked");
})