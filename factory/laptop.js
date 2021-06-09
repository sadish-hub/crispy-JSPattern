class Laptop {
    constructor({ ram = 0, ssd = 0, name = '' }) {
        this.ssd = ssd;
        this.ram = ram;
        this.name = name;
    }
}

export default Laptop;