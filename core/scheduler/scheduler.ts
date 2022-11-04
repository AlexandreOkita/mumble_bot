import { CronJob } from "cron";
import ScheduledEventI from "./scheduled_events/scheduled_event_interface";

export default class Scheduler {
  tickRate: number;
  private events: {
    event: ScheduledEventI;
    job: CronJob;
  }[] = [];

  constructor(tickRate = 60000) {
    this.tickRate = tickRate;
  }

  register(event: ScheduledEventI) {
    this.events.push({
      event: event,
      job: new CronJob(event.cron, () => event.run(), null, false, "America/Sao_Paulo"),
    });
  }

  start() {
    this.events.forEach((event) => {
      event.job.start();
    });
  }
}
