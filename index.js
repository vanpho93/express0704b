const express = require('express');

const app = express();
app.listen(3000, () => console.log('SERVER START'));

app.get('/', (req, res) => res.send('HELLO'));
