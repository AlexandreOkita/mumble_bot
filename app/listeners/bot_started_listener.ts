import { Client } from "discord.js";
import BotStartedEvent from "../discord_events/bot_started_event";
import eventQueue from "../../core/event_queue/event_queue";
import "./listener_interface";
import ListenerInterface from "./listener_interface";

export default class BotStartedListener implements ListenerInterface {
  configure(client: Client<boolean>): void {
    client.on("ready", async () => {
      if (!client.user || !client.application) {
        return;
      }

      eventQueue.publish(new BotStartedEvent(client.user.username));
    });
  }
}
