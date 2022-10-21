import "../../core/event_queue/event_interface"

export default class BotStartedEvent implements EventI {
  static eventName: string = "BotStartedEvent";
  tsCreated: number = Date.now()
  eventData: { clientName: string };

  constructor(clientName: string) {
    this.eventData = { clientName: clientName }
  }
}