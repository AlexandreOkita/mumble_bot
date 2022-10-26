import { GuildMember } from "discord.js";
import usersTable from "../../core/database/users_table";

export default class MemberRepository {
  addMember(member: GuildMember) {
    usersTable.add(member.displayName, member.user.username);
  }
}
