import DiscordMessenger from "../../app/discord_messenger";
import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";
import GarbageRepository from "../repositories/garbage_repository";

export default class NotifyResponsibleScheduledEvent
  implements ScheduledEventI
{
  discordMessenger: DiscordMessenger;
  garbageRepository: GarbageRepository;

  constructor(
    discordMessenger: DiscordMessenger,
    garbageRepository: GarbageRepository
  ) {
    this.discordMessenger = discordMessenger;
    this.garbageRepository = garbageRepository;
  }

  cron = "0 9 * * *";
  run(): void {
    this.sendGarbageResponsibleMessage();
  }

  private async sendGarbageResponsibleMessage() {
    const nextResponsible = this.garbageRepository.getNextResponsible();
    this.discordMessenger.send(`Olá! Hoje o dia do lixo é do: ${(await nextResponsible).name}`)
  }
}
