import EventI from "./event_interface";

class EventQueue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queue: Record<string, ((event: any) => void)[]> = {};

  subscribe<T>(eventName: string, eventHandler: (event: T) => void) {
    if (!this.queue[eventName]) {
      this.queue[eventName] = [];
    }

    this.queue[eventName].push(eventHandler);
  }

  publish(event: EventI) {
    if (this.queue[event.constructor.name]) {
      this.queue[event.constructor.name].forEach(async (handler) => {
        handler(event);
      });
    }
  }
}
const eventQueue = new EventQueue();
export default eventQueue;
