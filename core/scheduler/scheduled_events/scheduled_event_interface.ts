export default interface ScheduledEventI {
  cron: string;

  run(): void;
}
