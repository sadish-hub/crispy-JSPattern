import pubsub from './pubsub.js';
// const pubsub = require('./pubsub');
// const Events = require('./events');

const subscriber = {
    subscribeEvent: (secretEvent) => pubsub.subscribe(secretEvent, (data) => console.log(`${secretEvent} was published with the data: ${data.message}`))
};

export default subscriber;