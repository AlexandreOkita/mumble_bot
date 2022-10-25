import { Client } from "discord.js";
import eventQueue from "../../core/event_queue/event_queue";
import "./listener_interface";
import ListenerInterface from "./listener_interface";
import MemberAddedEvent from "../discord_events/member_added_event";


export default class GuildMemberAddedListener implements ListenerInterface {

  configure(client: Client<boolean>): void {
    client.on("guildMemberAdd", async (member) => {
      console.log(member);
      if (!client.user || !client.application) {
        return;
      }
      eventQueue.publish(new MemberAddedEvent(member))
    });
  }
}
