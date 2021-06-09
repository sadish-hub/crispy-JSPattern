import Laptop from './laptop.js';
import Tablet from './tablet.js';

const gadget = { Laptop, Tablet };

const gadgetFactory = {
    createGadget: (type, attributes) => {
        const gadgetType = gadget[type];
        return new gadgetType(attributes);
    }
};

export default gadgetFactory;