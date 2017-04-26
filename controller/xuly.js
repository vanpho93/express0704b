const PhepTinh = require('../PhepTinh');

const xuly = (req, res) => {
    //TODO HERE
    const { soa, sob, pt } = req.body;
    const phepTinh = new PhepTinh(soa, sob, pt);
    res.send(phepTinh.show());
};

module.exports = xuly;
