import { Client } from "discord.js";

export default interface ListenerInterface {
  configure(client: Client): void;
}