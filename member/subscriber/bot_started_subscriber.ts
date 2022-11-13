import BotStartedEvent from "../../discord/discord_events/bot_started_event";
import eventQueue from "../../core/event_queue/event_queue";
import SubscriberI from "../../core/subscriber_interface";
import RegisterAllGuildMembersUsecase from "../usecase/register_all_guild_members_usecase";

export default class BotStartedSubscriber implements SubscriberI {
  registerAllGuideMembersUsecase: RegisterAllGuildMembersUsecase;

  constructor(registerAllGuideMembersUsecase: RegisterAllGuildMembersUsecase) {
    this.registerAllGuideMembersUsecase = registerAllGuideMembersUsecase;
  }

  configure() {
    eventQueue.subscribe<BotStartedEvent>(
      BotStartedEvent.eventName,
      (event) => {
        this.registerAllGuideMembersUsecase.run(event.eventData.client);
      }
    );
  }
}
