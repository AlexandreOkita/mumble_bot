import InteractionCreatedEvent from "../../app/discord_events/interaction_created_event";
import eventQueue from "../../core/event_queue/event_queue";
import SubscriberI from "../../core/subscriber_interface";
import commandList from "../commands/command_list";

export default class InteractionCreatedSubscriber implements SubscriberI {

  configure() {
    eventQueue.subscribe<InteractionCreatedEvent>(InteractionCreatedEvent.eventName, (event) => {
      commandList.forEach(command => {
        if (event.eventData.interaction.commandName === command.data.name) {
          command.run(event.eventData.interaction);
        }
      })
    })
  }
}