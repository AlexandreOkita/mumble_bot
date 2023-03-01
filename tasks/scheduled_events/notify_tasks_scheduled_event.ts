import DiscordMessenger from "../../discord/messenger/discord_messenger";
import ScheduledEventI from "../../core/scheduler/scheduled_events/scheduled_event_interface";
import DiscordButton, {
  DiscordButtonStyle,
} from "../../discord/messenger/discord_button";
import MessageParser from "../../core/message_parser/message_parser";
import MessageData from "../../core/message_parser/message_data";
import TasksRepository from "../repositories/tasks_repository";
import { TaskDoneButton } from "../models/task_done_button";

export default class NotifyTasksScheduledEvent
  implements ScheduledEventI
{
  discordMessenger: DiscordMessenger;
  tasksRepository: TasksRepository;
  messageParser: MessageParser;

  constructor(
    discordMessenger: DiscordMessenger,
    tasksRepository: TasksRepository,
    messageParser: MessageParser
  ) {
    this.discordMessenger = discordMessenger;
    this.tasksRepository = tasksRepository;
    this.messageParser = messageParser;
  }

  cron = "10 25 11 * * *"; //Every 21:00
  async run() {
    const TASKS_PER_DAY = 3;
    const orderedTasks = (await this.tasksRepository.listTasks()).sort((a, b) => a.lastExecution?.getDate() - b.lastExecution.getDate());
    this.discordMessenger.send(`Olá! Essas são as tarefas de hoje:`);
    var messagesSent = 0;
    orderedTasks.forEach(task => {
      if (messagesSent < TASKS_PER_DAY) {
        this.discordMessenger.send(
          `${task.name}`,
          [
            new DiscordButton(
              this.messageParser.serialize(
                new MessageData(TaskDoneButton.ID, {
                  taskId: task.id,
                })
              ),
              "Feito :sunglasses:",
              DiscordButtonStyle.Success
            ),
          ]
        );
        messagesSent++;
      }
    })
    
  }
}
