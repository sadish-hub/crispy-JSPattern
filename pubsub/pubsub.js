const pubsub =  {

    publish: (event, data) => {
        // method to publish an update
        if (!subscribers[event]) return;

        subscribers[event].forEach(callback => {
            callback(data);
        });
    },
    subscribe: (event, callback) => {
        // method to subscribe to an update
        if (!subscribers[event]) {
            subscribers[event] = [];
        }

        subscribers[event].push(callback);
    }
}
let subscribers = {};
export default pubsub;