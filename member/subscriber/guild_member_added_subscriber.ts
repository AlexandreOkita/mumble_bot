import MemberAddedEvent from "../../discord/discord_events/member_added_event";
import eventQueue from "../../core/event_queue/event_queue";
import SubscriberI from "../../core/subscriber_interface";
import NewMemberUsecase from "../usecase/new_member_usecase";

export default class GuildMemberAddedSubscriber implements SubscriberI {
  newMemberUsecase: NewMemberUsecase;

  constructor(newMemberUsecase: NewMemberUsecase) {
    this.newMemberUsecase = newMemberUsecase;
  }

  configure() {
    eventQueue.subscribe<MemberAddedEvent>(
      MemberAddedEvent.eventName,
      (event) => {
        this.newMemberUsecase.run(event.eventData.member);
      }
    );
  }
}
