const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'html');
app.use(express.static('public'));
app.use("/css", express.static('css'));
app.use("/js", express.static('js'));

app.get('/', (req, res) => {
    res.render('index');
});