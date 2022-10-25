import MemberRepository from "./repository/member_repository";
import GuildMemberAddedSubscriber from "./subscriber/guild_member_added_subscriber";
import NewMemberUsecase from "./usecase/new_member_usecase";

new GuildMemberAddedSubscriber(new NewMemberUsecase(new MemberRepository())).configure()