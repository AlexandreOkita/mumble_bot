import { GuildMember } from "discord.js";
import UsecaseI from "../../core/usecase_interface";
import DiscordMessenger from "../../discord/messenger/discord_messenger";
import MemberRepository from "../repository/member_repository";

export default class NewMemberUsecase implements UsecaseI<GuildMember> {
  memberRepository: MemberRepository;
  discordMessenger: DiscordMessenger

  constructor(memberRepository: MemberRepository, discordMessenger: DiscordMessenger) {
    this.discordMessenger = discordMessenger;
    this.memberRepository = memberRepository;
  }

  run(dto: GuildMember): void {
    this.memberRepository.addMember(dto);
    this.discordMessenger.send(`Olá, ${dto.user.username}!`);
  }
}
