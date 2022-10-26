require("../misc/main");
require("../member/main");
import SayHiScheduledEvent from "../misc/scheduled_events/say_hi_scheduled_event";
import secrets from "../secrets";
import {
  botStartedListener,
  commandConfigurator,
  guildMemberAddedListener,
  interactionCreatedListener,
  scheduler,
} from "./app_config";
import discordClient from "./discord_client";

console.log("Bot is starting...");

const sayHi = new SayHiScheduledEvent();
scheduler.register(sayHi);
scheduler.start();

commandConfigurator.register_commands();

botStartedListener.configure(discordClient);
interactionCreatedListener.configure(discordClient);
guildMemberAddedListener.configure(discordClient);

discordClient.login(secrets.discordToken);
