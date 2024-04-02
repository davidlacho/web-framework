type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // If there is no key in the events object, create an empty array
    const handlers = this.events[eventName] || [];
    // Push the callback into the handlers array
    handlers.push(callback);
    // Assign the handlers array to the key in the events object
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    // If there is no key in the events object, return
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    // Iterate over the handlers array and call each callback
    handlers.forEach((callback) => {
      callback();
    });
  };
}
