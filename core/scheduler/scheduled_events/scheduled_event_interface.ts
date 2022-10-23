import Timedelta from "../../utils/timedelta";

export default interface ScheduledEventI {
  startDate: Date,
  frequency: Timedelta

  run(): void;
}