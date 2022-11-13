import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";

export default class SayHiScheduledEvent implements ScheduledEventI {
  cron = "0 10 * * * *" //Every hour at minute = 10
  run(): void {
    console.log(`Alive - ${Date}`);
  }
}
