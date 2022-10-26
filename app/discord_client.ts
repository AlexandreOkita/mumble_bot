import { Client, GatewayIntentBits } from "discord.js";

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });

export default discordClient