import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";

export default class SayHiScheduledEvent implements ScheduledEventI {
  cron = "* 10 * * * *" //Every hour at second = 10
  run(): void {
    console.log("Hi!");
  }
}
