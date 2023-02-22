import TasksTable from "../../core/database/tasks_table";
import Task from "../models/task";

export default class TasksRepository {

  tasksTable: TasksTable

  constructor(tasksTable: TasksTable) {
    this.tasksTable = tasksTable;
  }

  async addTask(taskName: string) {
    try {
        await this.tasksTable.add(taskName)
    } catch {
        console.log("Error to insert data!")
    }
  }

  async deleteTask(taskName: string) {
    try {
      await this.tasksTable.delete(taskName)
    } catch {
      console.log("Error to delete data!")
    }
  }

  async updateTask(taskName: string) {
    try {
      await this.tasksTable.update(taskName)
    } catch {
      console.log("Error to update data!")
    }
  }

  async listTasks(): Promise<Task[]> {
      return await this.tasksTable.listAll();
  }
}
