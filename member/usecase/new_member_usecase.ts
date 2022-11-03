import { GuildMember } from "discord.js";
import { discordMessenger } from "../../core/core_config";
import UsecaseI from "../../core/usecase_interface";
import MemberRepository from "../repository/member_repository";

export default class NewMemberUsecase implements UsecaseI<GuildMember> {
  memberRepository: MemberRepository;

  constructor(memberRepository: MemberRepository) {
    this.memberRepository = memberRepository;
  }

  run(dto: GuildMember): void {
    this.memberRepository.addMember(dto);
    discordMessenger.send(`Olá, ${dto.user.username}!`);
  }
}
