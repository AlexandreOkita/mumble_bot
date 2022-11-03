import { GuildMember } from "discord.js";
import UsersTable from "../../core/database/users_table";

export default class MemberRepository {

  usersTable: UsersTable

  constructor(usersTable: UsersTable) {
    this.usersTable = usersTable;
  }

  addMember(member: GuildMember) {
    this.usersTable.add(member.displayName, member.user.username, member.user.id);
  }
}
