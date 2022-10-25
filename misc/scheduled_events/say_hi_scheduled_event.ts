import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";
import Timedelta from "../../core/utils/timedelta";
import timedelta from "../../core/utils/timedelta";

export default class SayHiScheduledEvent implements ScheduledEventI {
  startDate: Date = new Date().addDelta(new Timedelta(5));
  frequency: timedelta = new Timedelta(0, 1);
  run(): void {
    console.log("Hi!");
  }

}