import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import CommandI from "../../core/command_interface";

export default class PingCommand implements CommandI {
  data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')

  run(command: CommandInteraction<CacheType>) { 
    command.reply("pong")
   }
}
