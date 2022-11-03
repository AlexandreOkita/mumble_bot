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

  cron = "0 0 9 * * *"; //Every 9:00
  run(): void {
    this.sendGarbageResponsibleMessage();
  }

  private async sendGarbageResponsibleMessage() {
    const nextResponsible = await this.garbageRepository.getNextResponsible();
    this.garbageRepository.addGarbageEvent(nextResponsible);
    this.discordMessenger.send(
      `Olá! Hoje a pessoa responsável pelo lixo é: <@${nextResponsible.discordId}>`
    );
  }
}
