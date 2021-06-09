import gadgetFactory from './gadgetFactory.js';

const myLaptop = gadgetFactory.createGadget("Laptop", {
    ram: 8,
    ssd: 256,
    name: "Sadish's MacBook Pro M1"
});

const myTablet = gadgetFactory.createGadget("Tablet", {
    ram: 4,
    hdd: 128,
    name: "Sadish's Lenovo",
    network: '4G'
});

console.log(myLaptop);
console.log(myTablet);