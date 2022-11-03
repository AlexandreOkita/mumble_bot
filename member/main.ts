import {
  botStartedSubscriber,
  guildMemberAddedSubscriber,
} from "./member_config";

require("./member_config");

//Configure Subscribers
botStartedSubscriber.configure();
guildMemberAddedSubscriber.configure();
