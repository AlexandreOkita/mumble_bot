require("../misc/main")
require("../member/main")
import Scheduler from "../core/scheduler/scheduler";
import SayHiScheduledEvent from "../misc/scheduled_events/say_hi_scheduled_event";
import secrets from "../secrets";
import CommandConfigurator from "./command_configurator";
import discordClient from "./discord_client";
import BotStartedListener from "./listeners/bot_started_listener";
import GuildMemberAddedListener from "./listeners/guild_member_added_listener";
import InteractionCreatedListener from "./listeners/interaction_created_listener";

console.log("Bot is starting...");

const scheduler = new Scheduler(1000)
const sayHi = new SayHiScheduledEvent()
scheduler.register(sayHi)
scheduler.start()

new BotStartedListener().configure(discordClient)
new InteractionCreatedListener().configure(discordClient)
new GuildMemberAddedListener().configure(discordClient)

new CommandConfigurator().register_commands()

discordClient.login(secrets.discordToken)
