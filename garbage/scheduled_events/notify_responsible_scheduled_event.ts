import DiscordMessenger from "../../discord/messenger/discord_messenger";
import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";
import GarbageRepository from "../repositories/garbage_repository";
import DiscordButton, {
  DiscordButtonStyle,
} from "../../discord/messenger/discord_button";
import { GarbageButton } from "../models/garbage_button";
import MessageParser from "../../core/message_parser/message_parser";
import MessageData from "../../core/message_parser/message_data";

export default class NotifyResponsibleScheduledEvent
  implements ScheduledEventI
{
  discordMessenger: DiscordMessenger;
  garbageRepository: GarbageRepository;
  messageParser: MessageParser;

  constructor(
    discordMessenger: DiscordMessenger,
    garbageRepository: GarbageRepository,
    messageParser: MessageParser
  ) {
    this.discordMessenger = discordMessenger;
    this.garbageRepository = garbageRepository;
    this.messageParser = messageParser;
  }

  cron = "00 00 09 * * *"; //Every 9:00
  async run() {
    const nextResponsible = await this.garbageRepository.getNextResponsible();
    const garbageDayId = await this.garbageRepository.addGarbageEvent(
      nextResponsible
    );
    this.discordMessenger.send(
      `Olá! Hoje a pessoa responsável pelo lixo é: <@${nextResponsible.discordId}>`,
      [
        new DiscordButton(
          this.messageParser.serialize(
            new MessageData(GarbageButton.HoldBackGarbage, {
              garbageDayId: garbageDayId,
            })
          ),
          "Atrasar",
          DiscordButtonStyle.Danger
        ),
      ]
    );
  }
}
