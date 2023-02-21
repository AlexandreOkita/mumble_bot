import GarbageDaysTable from "./database/garbage_days_table";
import TasksTable from "./database/tasks_table";
import UsersTable from "./database/users_table";
import MessageParser from "./message_parser/message_parser";
import Scheduler from "./scheduler/scheduler";

const SCHEDULER_TICK_RATE = 5000;

//Core components
export const scheduler = new Scheduler(SCHEDULER_TICK_RATE);
export const messageParser = new MessageParser();

//Database
export const garbageDaysTable = new GarbageDaysTable();
export const usersTable = new UsersTable();
export const tasksTable = new TasksTable();
