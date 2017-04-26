const express = require('express');
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.listen(3000, () => console.log('SERVER START'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/try', parser, (req, res) => {
    console.log(req.body);
    res.send('DA NHAN DU LIEU');
});

app.get('/tinh', (req, res) => {
    res.render('tinh');
});

app.post('/xuly', parser, require('./controller/xuly'));

const { show } = require('./func');

show(12345);
