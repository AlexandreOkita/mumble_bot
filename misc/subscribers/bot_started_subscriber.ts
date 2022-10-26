import BotStartedEvent from "../../app/discord_events/bot_started_event";
import eventQueue from "../../core/event_queue/event_queue";
import SubscriberI from "../../core/subscriber_interface";
import LogBotStatusUsecase from "../usecases/log_bot_status_usecase";

export default class BotStartedSubscriber implements SubscriberI {
  logBotStatusUsecase: LogBotStatusUsecase;

  constructor(logBotStatusUsecase: LogBotStatusUsecase) {
    this.logBotStatusUsecase = logBotStatusUsecase;
  }

  configure() {
    eventQueue.subscribe<BotStartedEvent>(
      BotStartedEvent.eventName,
      (event) => {
        this.logBotStatusUsecase.run(event.eventData.clientName);
      }
    );
  }
}
