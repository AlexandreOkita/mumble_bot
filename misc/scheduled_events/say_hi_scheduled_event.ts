import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";

export default class SayHiScheduledEvent implements ScheduledEventI {
  cron = "10 * * * * *" //Every second = 10
  run(): void {
    console.log("Hi!");
  }
}
