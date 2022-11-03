import CommandConfigurator from "../app/command_configurator";
import discordClient from "../app/discord_client";
import DiscordMessenger from "../app/discord_messenger";
import GarbageDaysTable from "./database/garbage_days_table";
import UsersTable from "./database/users_table";
import Scheduler from "./scheduler/scheduler";

const SCHEDULER_TICK_RATE = 1000;

//Core components
export const scheduler = new Scheduler(SCHEDULER_TICK_RATE);
export const commandConfigurator = new CommandConfigurator();
export const discordMessenger = new DiscordMessenger(discordClient);

//Database
export const garbageDaysTable = new GarbageDaysTable();
export const usersTable = new UsersTable();
