import { CommandInteraction } from "discord.js";
import "../../core/event_queue/event_interface";
import EventI from "../../core/event_queue/event_interface";

export default class CommandCreatedEvent implements EventI {
  static eventName = "CommandCreatedEvent";
  tsCreated: number = Date.now();
  eventData: { interaction: CommandInteraction };

  constructor(interaction: CommandInteraction) {
    this.eventData = { interaction: interaction };
  }
}
