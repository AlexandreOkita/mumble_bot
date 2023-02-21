import TasksTable from "../../core/database/tasks_table";

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
    await this.tasksTable.delete(taskName)
  }
}
