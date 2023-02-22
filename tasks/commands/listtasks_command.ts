import { SlashCommandBuilder, CommandInteraction, CacheType } from "discord.js";
import CommandI from "../../core/command_interface";
import TasksRepository from "../repositories/tasks_repository";

export default class ListTasksCommand implements CommandI {

    tasksRepository: TasksRepository

    constructor(tasksRepository: TasksRepository) {
      this.tasksRepository = tasksRepository
    }
  
    data = new SlashCommandBuilder()
    .setName("listtasks")
    .setDescription("List tasks");

  async run(command: CommandInteraction<CacheType>) {
    console.log(`Listing tasks`);
    const tasks = await this.tasksRepository.listTasks();
    console.log(tasks);
    const tasksString = tasks.map(task => {return `  - ${task.name}\n`});
    command.reply(`Current tasks:\n\n${tasksString}`);
  }

}