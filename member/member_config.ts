import { usersTable } from "../core/core_config";
import { discordMessenger } from "../discord/discord_config";
import MemberRepository from "./repository/member_repository";
import BotStartedSubscriber from "./subscriber/bot_started_subscriber";
import GuildMemberAddedSubscriber from "./subscriber/guild_member_added_subscriber";
import NewMemberUsecase from "./usecase/new_member_usecase";
import RegisterAllGuildMembersUsecase from "./usecase/register_all_guild_members_usecase";

//Repositories
export const memberRepository = new MemberRepository(usersTable);

//Usecases
export const newMemberUsecase = new NewMemberUsecase(memberRepository, discordMessenger);
export const registerAllGuideMembersUsecase =
  new RegisterAllGuildMembersUsecase(memberRepository);

//Subscribers
export const guildMemberAddedSubscriber = new GuildMemberAddedSubscriber(
  newMemberUsecase
);
export const botStartedSubscriber = new BotStartedSubscriber(
  registerAllGuideMembersUsecase
);
