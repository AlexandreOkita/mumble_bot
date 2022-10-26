import MemberRepository from "./repository/member_repository";
import GuildMemberAddedSubscriber from "./subscriber/guild_member_added_subscriber";
import NewMemberUsecase from "./usecase/new_member_usecase";

//Repositories
export const memberRepository = new MemberRepository();

//Usecases
export const newMemberUsecase = new NewMemberUsecase(memberRepository);

//Subscribers
export const guildMemberAddedSubscriber = new GuildMemberAddedSubscriber(newMemberUsecase)