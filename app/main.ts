require("../misc/main");
require("../member/main");
import { commandConfigurator, discordMessenger, scheduler } from "../core/core_config";
import { garbageRepository } from "../garbage/garbage_config";
import NotifyResponsibleScheduledEvent from "../garbage/scheduled_events/notify_responsible_scheduled_event";
import SayHiScheduledEvent from "../misc/scheduled_events/say_hi_scheduled_event";
import secrets from "../secrets";
import {
  botStartedListener,
  guildMemberAddedListener,
  interactionCreatedListener,
} from "./app_config";
import discordClient from "./discord_client";

console.log("Bot is starting...");

const sayHi = new SayHiScheduledEvent();
const nextResponsible = new NotifyResponsibleScheduledEvent(
  discordMessenger,
  garbageRepository
);
scheduler.register(sayHi);
scheduler.register(nextResponsible);
scheduler.start();

commandConfigurator.register_commands();

botStartedListener.configure(discordClient);
interactionCreatedListener.configure(discordClient);
guildMemberAddedListener.configure(discordClient);

discordClient.login(secrets.discordToken);
