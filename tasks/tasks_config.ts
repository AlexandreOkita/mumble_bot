import CommandI from "../core/command_interface";
import {
  messageParser,
  tasksTable,
} from "../core/core_config";
import { discordMessenger } from "../discord/discord_config";
import AddTaskCommand from "./commands/addtask_command";
import DeleteTaskCommand from "./commands/deletetask_command";
import ListTasksCommand from "./commands/listtasks_command";
import TasksRepository from "./repositories/tasks_repository";
import NotifyTasksScheduledEvent from "./scheduled_events/notify_tasks_scheduled_event";

//Repositories
export const tasksRepository = new TasksRepository(
  tasksTable,
);

//Commands
export const tasksCommandList: CommandI[] = [new AddTaskCommand(tasksRepository), new DeleteTaskCommand(tasksRepository), new ListTasksCommand(tasksRepository)];

//Scheduler
export const notifyTaskScheduledEvent = new NotifyTasksScheduledEvent(discordMessenger, tasksRepository, messageParser)