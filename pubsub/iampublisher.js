import pubsub from './pubsub.js';
import Events from './events.js';
// const pubsub = require('./pubsub');
// const Events = require('./events');

const publisher = {
    publishEvent(secretMessage) {
        const data = {
            message: secretMessage
        };
        pubsub.publish(Events.SECRET_EVENT, data);
    }
};

export default publisher;