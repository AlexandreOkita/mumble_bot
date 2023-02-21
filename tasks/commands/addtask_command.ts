import { CacheType, CommandInteraction, SlashCommandBuilder, CommandInteractionOptionResolver } from "discord.js";
import CommandI from "../../core/command_interface";
import TasksRepository from "../repositories/tasks_repository";

export default class AddTaskCommand implements CommandI {

  tasksRepository: TasksRepository

  constructor(tasksRepository: TasksRepository) {
    this.tasksRepository = tasksRepository
  }

  data = new SlashCommandBuilder()
    .setName("addtask")
    .addStringOption(option => 
      option.setName("taskname")
      .setDescription("The task that will be added")
      .setRequired(true)
    )
    .setDescription("Add a new task to database");

  async run(command: CommandInteraction<CacheType>) {
    const taskName = (command.options as CommandInteractionOptionResolver).getString("taskname", true);
    console.log(`Adding ${taskName}`)
    await this.tasksRepository.addTask(taskName);
    command.reply(`Added ${taskName}!`);
  }
}
