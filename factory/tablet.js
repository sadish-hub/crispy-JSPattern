class Tablet {
    constructor({ ram = 0, hdd = 0, name = '', network = 0 }) {
        this.hdd = hdd;
        this.ram = ram;
        this.name = name;
        this.network = network;
    }
}

export default Tablet;