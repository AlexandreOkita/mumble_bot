import { Client } from "discord.js";
import "../../core/event_queue/event_interface";
import EventI from "../../core/event_queue/event_interface";

export default class BotStartedEvent implements EventI {
  static eventName = "BotStartedEvent";
  tsCreated: number = Date.now();
  eventData: { client: Client<boolean> };

  constructor(client: Client) {
    this.eventData = { client: client };
  }
}
