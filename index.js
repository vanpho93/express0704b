const express = require('express');
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.listen(3000, () => console.log('SERVER START'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    req.a = 1000;
    next();
});

app.get('/', (req, res) => res.render('home', { giatri: req.a }));

app.post('/try', parser, (req, res) => {
    console.log(req.body);
    res.send('DA NHAN DU LIEU');
});

app.get('/tinh', (req, res) => {
    res.render('tinh');
});

app.post('/xuly', parser, require('./controller/xuly'));

app.get('*', (req, res) => res.redirect('/'));
