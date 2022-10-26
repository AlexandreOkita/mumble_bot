import { REST, Routes } from "discord.js";
import CommandI from "../core/command_interface";
import commandList from "../misc/commands/command_list";
import secrets from "../secrets";

export default class CommandConfigurator {
  register_commands() {
    const rest = new REST({ version: "10" }).setToken(secrets.discordToken);
    const commands = this.gather_all_command_lists().map(
      (command) => command.data
    );
    (async () => {
      try {
        console.log(
          `Started refreshing ${commands.length} application (/) commands.`
        );

        await rest.put(
          Routes.applicationGuildCommands(
            secrets.applicationId,
            secrets.guildId
          ),
          { body: commands }
        );

        console.log(`Successfully reloaded application (/) commands.`);
      } catch (error) {
        console.error(error);
      }
    })();
  }

  private gather_all_command_lists(): CommandI[] {
    return commandList;
  }
}
