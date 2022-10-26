import Scheduler from "../core/scheduler/scheduler";
import CommandConfigurator from "./command_configurator";
import discordClient from "./discord_client";
import DiscordMessenger from "./discord_messenger";
import BotStartedListener from "./listeners/bot_started_listener";
import GuildMemberAddedListener from "./listeners/guild_member_added_listener";
import InteractionCreatedListener from "./listeners/interaction_created_listener";

const SCHEDULER_TICK_RATE = 1000;

//Core components
export const scheduler = new Scheduler(SCHEDULER_TICK_RATE);
export const commandConfigurator = new CommandConfigurator();
export const discordMessenger = new DiscordMessenger(discordClient);

//Listeners
export const botStartedListener = new BotStartedListener();
export const interactionCreatedListener = new InteractionCreatedListener();
export const guildMemberAddedListener = new GuildMemberAddedListener();
