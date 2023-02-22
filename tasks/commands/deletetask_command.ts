import { CacheType, CommandInteraction, CommandInteractionOptionResolver, SlashCommandBuilder } from "discord.js";
import CommandI from "../../core/command_interface";
import TasksRepository from "../repositories/tasks_repository";

export default class DeleteTaskCommand implements CommandI {

  tasksRepository: TasksRepository

  constructor(tasksRepository: TasksRepository) {
    this.tasksRepository = tasksRepository
  }


  data = new SlashCommandBuilder()
    .setName("deletetask")
    .addStringOption(option =>
      option.setName("taskname")
      .setDescription("The task that will be deleted")
      .setRequired(true)
    )
    .setDescription("Delete a task from database");

  run(command: CommandInteraction<CacheType>) {
    const taskName = (command.options as CommandInteractionOptionResolver).getString("taskname", true);
    console.log(`Deleting ${taskName}`);
    this.tasksRepository.deleteTask(taskName);
    command.reply(`Deleted ${taskName}!`);
  }
}
