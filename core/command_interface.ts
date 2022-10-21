import { CommandInteraction, SlashCommandBuilder } from "discord.js"

export default interface CommandI {
  data: SlashCommandBuilder
  run: (command: CommandInteraction) => void
}