const express = require('express');

const app = express();
app.listen(3000, () => console.log('SERVER START'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));
