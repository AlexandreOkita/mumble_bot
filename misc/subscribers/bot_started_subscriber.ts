import BotStartedEvent from "../../discord/discord_events/bot_started_event";
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
        if (event.eventData.client.user) {
          this.logBotStatusUsecase.run(event.eventData.client.user?.username);
        }
      }
    );
  }
}
