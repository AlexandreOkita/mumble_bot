import { Client } from "discord.js";
import UsecaseI from "../../core/usecase_interface";
import secrets from "../../secrets";
import MemberRepository from "../repository/member_repository";

export default class RegisterAllGuildMembersUsecase
  implements UsecaseI<Client>
{
  memberRepository: MemberRepository;

  constructor(memberRepository: MemberRepository) {
    this.memberRepository = memberRepository;
  }

  async run(client: Client) {
    if (!client.user || !client.application) {
      return;
    }
    const guild = client.guilds.cache.get(secrets.guildId);
    if (guild) {
      const members = await guild.members.fetch();
      members.forEach(async (member) => {
        this.memberRepository.addMember(member);
      });
    }
  }
}
