import eventQueue from "../../core/event_queue/event_queue";
import MessageParser from "../../core/message_parser/message_parser";
import SubscriberI from "../../core/subscriber_interface";
import ButtonInteractionCreatedEvent from "../../discord/discord_events/button_interaction_created_event";
import { TaskDoneButton } from "../models/task_done_button";
import TasksRepository from "../repositories/tasks_repository";

export default class ButtonInteractionCreatedSubscriber implements SubscriberI {
  tasksRepository: TasksRepository;
  messageParser: MessageParser;

  constructor(
    tasksRepository: TasksRepository,
    messageParser: MessageParser
  ) {
    this.tasksRepository = tasksRepository;
    this.messageParser = messageParser;
  }

  configure() {
    eventQueue.subscribe<ButtonInteractionCreatedEvent>(
      ButtonInteractionCreatedEvent.eventName,
      async (event) => {
        const eventMessageData = this.messageParser.deserialize(
          event.eventData.interaction.customId
        );
        if (eventMessageData.eventName == TaskDoneButton.ID) {
          
        }
      }
    );
  }
}
