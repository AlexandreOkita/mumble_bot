import ScheduledEventI from "./scheduled_events/scheduled_event_interface";

export default class Scheduler {
  tickRate: number;
  private events: { event: ScheduledEventI; nextDate: Date }[] = [];

  constructor(tickRate = 60000) {
    this.tickRate = tickRate;
  }

  register(event: ScheduledEventI) {
    this.events.push({
      event: event,
      nextDate: event.startDate,
    });
  }

  start() {
    setInterval(() => {
      const now = new Date();
      this.events.forEach((scheduledEvent) => {
        if (now > scheduledEvent.nextDate) {
          scheduledEvent.nextDate = now.addDelta(
            scheduledEvent.event.frequency
          );
          scheduledEvent.event.run();
        }
      });
    }, this.tickRate);
  }
}
