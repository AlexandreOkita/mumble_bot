import CommandI from "../core/command_interface";
import {
  tasksTable,
} from "../core/core_config";
import AddTaskCommand from "./commands/addtask_command";
import DeleteTaskCommand from "./commands/deletetask_command";
import ListTasksCommand from "./commands/listtasks_command";
import TasksRepository from "./repositories/tasks_repository";

//Repositories
export const tasksRepository = new TasksRepository(
  tasksTable,
);

//Commands
export const tasksCommandList: CommandI[] = [new AddTaskCommand(tasksRepository), new DeleteTaskCommand(tasksRepository), new ListTasksCommand(tasksRepository)];
