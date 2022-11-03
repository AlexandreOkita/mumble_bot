import supabase from "./database_client";

export type GarbageDay = {
  id: string;
  userId: string;
  createdDt: Date;
  hasCompleted: boolean;
};

export default class GarbageDaysTable {
  add(hasCompleted: boolean, userId: string) {
    supabase
      .from("t_garbage_days")
      .insert({
        has_completed: hasCompleted,
        user_id: userId,
      })
      .then((value) => console.log(value));
  }

  async getMostRecentDays(): Promise<GarbageDay[]> {
    const query = await supabase.from("v_garbage_days_most_recent").select();
    if (query.data) {
      return query.data.map((value) => {
        return this.mapData(value);
      });
    }
    throw Error("Error to get garbage most recent days")
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapData(data: any): GarbageDay {
    return {
      id: data.id,
      userId: data.user_id,
      hasCompleted: data.has_completed,
      createdDt: data.created_dt,
    };
  }
}
