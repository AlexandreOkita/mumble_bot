import { GuildMember } from "discord.js";
import "../../core/event_queue/event_interface"

export default class MemberAddedEvent implements EventI {
  static eventName: string = "MemberAddedEvent";
  tsCreated: number = Date.now()
  eventData: { member: GuildMember };

  constructor(member: GuildMember) {
    this.eventData = { member: member }
  }
}