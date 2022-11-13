import { Client } from "discord.js";
import eventQueue from "../../core/event_queue/event_queue";
import "./listener_interface";
import ListenerInterface from "./listener_interface";
import InteractionCreatedEvent from "../discord_events/interaction_created_event";

export default class InteractionCreatedListener implements ListenerInterface {
  configure(client: Client<boolean>): void {
    client.on("interactionCreate", async (interaction) => {
      if (interaction.isCommand()) {
        eventQueue.publish(new InteractionCreatedEvent(interaction));
      }
    });
  }
}
