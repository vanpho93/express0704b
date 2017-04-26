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

app.post('/xuly', parser, (req, res) => {
    //TODO HERE
    const { soa, sob, pt } = req.body;
    const phepTinh = new PhepTinh(soa, soa, pt);
    res.send(phepTinh.show());
});

class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    show() {
        let pt;
        switch (this.tenPhepTinh) {
            case 'cong': { 
                pt = '+';
                break;
            }
            case 'tru': { 
                pt = '-';
                break;
            }case 'nhan': { 
                pt = '*';
                break;
            }default: { 
                pt = '/';
                break;
            }
        }
        const veTrai = `${this.soA} ${pt} ${this.soB}`;
        return `${veTrai} = ${ eval(veTrai) }`;
    }
}