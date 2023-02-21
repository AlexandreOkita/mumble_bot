import { REST, Routes } from "discord.js";
import CommandI from "../core/command_interface";
import eventQueue from "../core/event_queue/event_queue";
import commandList from "../misc/commands/command_list";
import secrets from "../secrets";
import { tasksCommandList } from "../tasks/tasks_config";
import InteractionCreatedEvent from "../discord/discord_events/interaction_created_event";


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

        this.configure_commands_subscribers()

        console.log(`Successfully reloaded application (/) commands.`);
      } catch (error) {
        console.error(error);
      }
    })();
  }

  private configure_commands_subscribers() {
    eventQueue.subscribe<InteractionCreatedEvent>(
      InteractionCreatedEvent.eventName,
      (event) => {
        this.gather_all_command_lists().forEach((command) => {
          if (event.eventData.interaction.commandName === command.data.name) {
            command.run(event.eventData.interaction);
          }
        });
      }
    );
  }

  private gather_all_command_lists(): CommandI[] {
    return commandList.concat(tasksCommandList);
  }
}
