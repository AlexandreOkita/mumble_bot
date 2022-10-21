class EventQueue {

  queue: Record<string, ((event: any) => void)[]> = {}

  subscribe<T>(eventName: string, eventHandler: (event: T) => void) {
    if (!this.queue[eventName]) {
      this.queue[eventName] = []
    }

    this.queue[eventName].push(eventHandler)
  }

  publish(event: EventI) {
    if (this.queue[event.constructor.name]) {
      this.queue[event.constructor.name].forEach(async handler => {
        handler(event);
      });
    }
  }
}
const eventQueue = new EventQueue()
export default eventQueue