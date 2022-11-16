import eventQueue from "../../core/event_queue/event_queue";
import MessageParser from "../../core/message_parser/message_parser";
import SubscriberI from "../../core/subscriber_interface";
import ButtonInteractionCreatedEvent from "../../discord/discord_events/button_interaction_created_event";
import { GarbageButton } from "../models/garbage_button";
import GarbageRepository from "../repositories/garbage_repository";

export default class ButtonInteractionCreatedSubscriber implements SubscriberI {
  garbageRepository: GarbageRepository;
  messageParser: MessageParser;

  constructor(
    garbageRepository: GarbageRepository,
    messageParser: MessageParser
  ) {
    this.garbageRepository = garbageRepository;
    this.messageParser = messageParser;
  }

  configure() {
    eventQueue.subscribe<ButtonInteractionCreatedEvent>(
      ButtonInteractionCreatedEvent.eventName,
      async (event) => {
        const eventMessageData = this.messageParser.deserialize(
          event.eventData.interaction.customId
        );
        if (eventMessageData.eventName == GarbageButton.HoldBackGarbage) {
          const garbageDayId = eventMessageData.data.garbageDayId;
          this.garbageRepository.uncompleteLastDay(garbageDayId);
          const garbageDayUser = await this.garbageRepository.getGarbageDayUser(
            garbageDayId
          );
          const newMessage =
            event.eventData.interaction.user.id == garbageDayUser.user.discordId
              ? `<@${garbageDayUser.user.discordId}> marcou que se atrasou nesse dia!`
              : `<@${event.eventData.interaction.user.id}> marcou que <@${garbageDayUser.user.discordId}> atrasou nesse dia!`;
          await event.eventData.interaction.update({
            content: newMessage,
            components: [],
          });
        }
      }
    );
  }
}
