import Task from "../../tasks/models/task";
import supabase from "./database_client";

export default class TasksTable {

  async add(name: string): Promise<string> {
    const data = await supabase
      .from("t_tasks")
      .insert({
        name: name,
      })
      .select();
    if (data.data) {
      return data.data[0].id;
    }
    throw Error("Error to insert data");
  }

  async delete(name: string): Promise<string> {
    const deletedData = await supabase.from("t_tasks").delete().match({ 'name': name }).select();
    if (deletedData.data) {
      return deletedData.data[0].name;
    }
    throw Error("Nothing to delete");
  }

  async update(name: string): Promise<void> {
    const data = await supabase
      .from("t_tasks")
      .update({
        last_execution: Date.now()
      })
      .eq("name", name);
  }

  async listAll(): Promise<Task[]> {
    const data = await supabase.from("t_tasks").select()
    if (data.data) {
      return data.data.map(item => {
        return new Task(item.id, item.name, item.last_execution);
      });
    }
    throw Error("Nothing to list");
  }

}
