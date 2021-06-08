import publisher from "./iampublisher.js";
import subscriber from "./iamsubscriber.js";
import Events from './events.js';

console.log("---LETS BEGIN---");
const JERRY_MESSAGE = "TOP SECRET DATA FROM JERRY", TOM_MESSAGE = "TOP SECRET DATA FROM TOM";
subscriber.subscribeEvent(Events.SECRET_EVENT);
publisher.publishEvent(TOM_MESSAGE);
publisher.publishEvent(JERRY_MESSAGE);

console.log("---THE END---");