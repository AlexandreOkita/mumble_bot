import DiscordMessenger from "./messenger/discord_messenger";
import CommandConfigurator from "./command_configurator";
import discordClient from "./discord_client";
import BotStartedListener from "./listeners/bot_started_listener";
import GuildMemberAddedListener from "./listeners/guild_member_added_listener";
import InteractionCreatedListener from "./listeners/interaction_created_listener";

//Commands
export const commandConfigurator = new CommandConfigurator();

//Listeners
export const botStartedListener = new BotStartedListener();
export const interactionCreatedListener = new InteractionCreatedListener();
export const guildMemberAddedListener = new GuildMemberAddedListener();
export const discordMessenger = new DiscordMessenger(discordClient);
