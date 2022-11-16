import { Client, Events } from "discord.js";
import eventQueue from "../../core/event_queue/event_queue";
import "./listener_interface";
import ListenerInterface from "./listener_interface";
import InteractionCreatedEvent from "../discord_events/interaction_created_event";
import ButtonInteractionCreatedEvent from "../discord_events/button_interaction_created_event";

export default class InteractionCreatedListener implements ListenerInterface {
  configure(client: Client<boolean>): void {
    client.on(Events.InteractionCreate, async (interaction) => {
      if (interaction.isCommand()) {
        eventQueue.publish(new InteractionCreatedEvent(interaction));
        return;
      }
      if (interaction.isButton()) {
        eventQueue.publish(new ButtonInteractionCreatedEvent(interaction));
        return;
      }
    });
  }
}
