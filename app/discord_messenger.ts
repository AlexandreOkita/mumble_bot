import { Client, TextChannel } from "discord.js"

const GENERAL_CHANNEL_ID = "1032808459801989133"
const GUILD_ID = "1032808456849203210"

export default class DiscordMessenger {

  private client: Client
  private channel?: TextChannel

  constructor(client: Client) {
    this.client = client;
  }

  private async setGuildAndChannel() {
    const guild = await this.client.guilds.fetch(GUILD_ID);
    this.channel = await guild.channels.fetch(GENERAL_CHANNEL_ID) as TextChannel
  }

  async send(message: string) {
    if (this.channel == null) {
      await this.setGuildAndChannel();
    }
    this.channel?.send(message)
  }
}