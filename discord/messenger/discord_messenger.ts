import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  TextChannel,
} from "discord.js";
import DiscordButton, { DiscordButtonStyle } from "./discord_button";

const GENERAL_CHANNEL_ID = "1032808459801989133";
const GUILD_ID = "1032808456849203210";

export default class DiscordMessenger {
  private client: Client;
  private channel?: TextChannel;

  constructor(client: Client) {
    this.client = client;
  }

  async send(message: string, buttons: DiscordButton[] = []) {
    const row = new ActionRowBuilder() as ActionRowBuilder<ButtonBuilder>;

    buttons.forEach((button) => {
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(button.customId)
          .setLabel(button.label)
          .setStyle(this.getDiscordButtonStyle(button.style))
      );
    });

    if (this.channel == null) {
      await this.setGuildAndChannel();
    }
    await this.channel?.send({ content: message, components: [row] });
  }

  private async setGuildAndChannel() {
    const guild = await this.client.guilds.fetch(GUILD_ID);
    this.channel = (await guild.channels.fetch(
      GENERAL_CHANNEL_ID
    )) as TextChannel;
  }

  private getDiscordButtonStyle(style: DiscordButtonStyle): ButtonStyle {
    switch(style) {
      case DiscordButtonStyle.Danger: return ButtonStyle.Danger
      case DiscordButtonStyle.Link: return ButtonStyle.Link
      case DiscordButtonStyle.Primary: return ButtonStyle.Primary
      case DiscordButtonStyle.Secondary: return ButtonStyle.Secondary
      case DiscordButtonStyle.Success: return ButtonStyle.Success
    }
  }
}
