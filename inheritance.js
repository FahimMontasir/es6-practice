//parent class
class father {
    constructor() {
        this.Name = 'Imran';
        this.Number = '01823456';
    }
}

class child extends father {
    constructor(sonName) {
        super();
        this.son = sonName;
    }
}
const vioData = new child('shakil');
console.log(vioData);