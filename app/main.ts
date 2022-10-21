require("../misc/main")
import secrets from "../secrets";
import CommandConfigurator from "./command_configurator";
import discordClient from "./discord_client";
import BotStartedListener from "./listeners/bot_started_listener";
import InteractionCreatedListener from "./listeners/interaction_created_listener";

console.log("Bot is starting...");

new BotStartedListener().configure(discordClient)
new InteractionCreatedListener().configure(discordClient)

new CommandConfigurator().register_commands()

discordClient.login(secrets.discordToken)
