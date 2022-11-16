import "../../core/event_queue/event_interface";
import EventI from "../../core/event_queue/event_interface";
import { ButtonInteraction } from "discord.js";


export default class ButtonInteractionCreatedEvent implements EventI {
  static eventName = "ButtonInteractionCreatedEvent";
  tsCreated: number = Date.now();
  eventData: { interaction: ButtonInteraction };

  constructor(interaction: ButtonInteraction) {
    this.eventData = { interaction: interaction };
  }
}
