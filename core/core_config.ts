import GarbageDaysTable from "./database/garbage_days_table";
import UsersTable from "./database/users_table";
import Scheduler from "./scheduler/scheduler";

const SCHEDULER_TICK_RATE = 5000;

//Core components
export const scheduler = new Scheduler(SCHEDULER_TICK_RATE);

//Database
export const garbageDaysTable = new GarbageDaysTable();
export const usersTable = new UsersTable();
