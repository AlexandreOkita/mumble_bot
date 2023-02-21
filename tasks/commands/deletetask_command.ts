import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import CommandI from "../../core/command_interface";

export default class DeleteTaskCommand implements CommandI {
  data = new SlashCommandBuilder()
    .setName("deletetask")
    .setDescription("Delete a task from database");

  run(command: CommandInteraction<CacheType>) {
    
  }
}
