import { GuildMember, TextChannel } from "discord.js";
import UsecaseI from "../../core/usecase_interface";
import MemberRepository from "../repository/member_repository";

export default class NewMemberUsecase implements UsecaseI<GuildMember> {

  memberRepository: MemberRepository;

  constructor(memberRepository: MemberRepository) {
    this.memberRepository = memberRepository;
  }

  run(dto: GuildMember): void {
    this.memberRepository.addMember(dto);
    const channel = dto.client.channels.cache.get("1032808459801989133")
    console.log(channel)
    if (channel?.isTextBased) (channel as TextChannel).send(`Olá, ${dto.user.username}!`)
  }

}