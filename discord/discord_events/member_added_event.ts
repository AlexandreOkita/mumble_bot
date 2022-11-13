import { GuildMember } from "discord.js";
import "../../core/event_queue/event_interface";
import EventI from "../../core/event_queue/event_interface";

export default class MemberAddedEvent implements EventI {
  static eventName = "MemberAddedEvent";
  tsCreated: number = Date.now();
  eventData: { member: GuildMember };

  constructor(member: GuildMember) {
    this.eventData = { member: member };
  }
}
