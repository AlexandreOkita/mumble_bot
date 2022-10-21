require("../misc/main")
import { Client } from "discord.js";
import secrets from "../secrets";
import BotStartedListener from "./listeners/bot_started_listener";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

new BotStartedListener().configure(client)
client.login(secrets.discordToken)
