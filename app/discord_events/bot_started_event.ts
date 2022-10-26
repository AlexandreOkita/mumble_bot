import "../../core/event_queue/event_interface";
import EventI from "../../core/event_queue/event_interface";

export default class BotStartedEvent implements EventI {
  static eventName = "BotStartedEvent";
  tsCreated: number = Date.now();
  eventData: { clientName: string };

  constructor(clientName: string) {
    this.eventData = { clientName: clientName };
  }
}
