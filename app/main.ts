require("../misc/main");
require("../member/main");
require("../garbage/main");
import { messageParser, scheduler } from "../core/core_config";
import { garbageRepository } from "../garbage/garbage_config";
import NotifyResponsibleScheduledEvent from "../garbage/scheduled_events/notify_responsible_scheduled_event";
import SayHiScheduledEvent from "../misc/scheduled_events/say_hi_scheduled_event";
import secrets from "../secrets";
import discordClient from "../discord/discord_client";
import {
  discordMessenger,
  commandConfigurator,
  botStartedListener,
  interactionCreatedListener,
  guildMemberAddedListener,
} from "../discord/discord_config";

console.log("Bot is starting...");
discordClient.login(secrets.discordToken);

const sayHi = new SayHiScheduledEvent();
const nextResponsible = new NotifyResponsibleScheduledEvent(
  discordMessenger,
  garbageRepository,
  messageParser
);
scheduler.register(sayHi);
scheduler.register(nextResponsible);
scheduler.start();

commandConfigurator.register_commands();

botStartedListener.configure(discordClient);
interactionCreatedListener.configure(discordClient);
guildMemberAddedListener.configure(discordClient);
