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

        let index = subscribers[event].push(callback) - 1

        return {
            unsubscribe: () => subscribers[event].splice(index, 1)
        };
    }
}
let subscribers = {};
export default pubsub;