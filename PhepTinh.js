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
            } 
            case 'nhan': { 
                pt = '*';
                break;
            } 
            default: { 
                pt = '/';
                break;
            }
        }
        const veTrai = `${this.soA} ${pt} ${this.soB}`;
        return `${veTrai} = ${eval(veTrai)}`;
    }
}

module.exports = PhepTinh;
