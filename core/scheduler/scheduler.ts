import { CronExpression, parseExpression } from "cron-parser";
import ScheduledEventI from "./scheduled_events/scheduled_event_interface";

export default class Scheduler {
  tickRate: number;
  private events: { event: ScheduledEventI; cron: CronExpression }[] = [];

  constructor(tickRate = 60000) {
    this.tickRate = tickRate;
  }

  register(event: ScheduledEventI) {
    this.events.push({
      event: event,
      cron: parseExpression(event.cron)
    });
  }

  start() {
    setInterval(() => {
      const now = new Date();
      this.events.forEach((scheduledEvent) => {
        if (now > scheduledEvent.cron.next().toDate()) {
          scheduledEvent.event.run();
        }
      });
    }, this.tickRate);
  }
}
