import supabase from "./database_client";

export type Task = {
  id: string;
  name: string;
  createdDt: Date;
  lastExecution: Date;
};

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

}
