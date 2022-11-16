import supabase from "./database_client";
import { User } from "./users_table";

export type GarbageDay = {
  id: string;
  userId: string;
  createdDt: Date;
  hasCompleted: boolean;
};

export type GarbageDayUser = {
  id: string;
  user: { discordUsername: string; name: string; discordId: string };
  createdDt: Date;
  hasCompleted: boolean;
};

export default class GarbageDaysTable {
  async add(hasCompleted: boolean, userId: string): Promise<string> {
    const data = await supabase
      .from("t_garbage_days")
      .insert({
        has_completed: hasCompleted,
        user_id: userId,
      })
      .select();
    if (data.data) {
      return data.data[0].id;
    }
    throw Error("Error to insert data");
  }

  async updateLastUserDay(dayId: string, hasCompleted: boolean) {
    await supabase
      .from("t_garbage_days")
      .update({ has_completed: hasCompleted })
      .eq("id", dayId);
  }

  async getGarbageDayFromId(id: string): Promise<GarbageDayUser> {
    const query = await supabase
      .from("v_garbage_days_users")
      .select()
      .eq("id", id);
    if (query.data) {
      return query.data.map((value) => {
        return {
          id: value.id,
          user: {
            discordUsername: value.discord_username,
            discordId: value.discord_id,
            name: value.name,
          },
          createdDt: value.created_dt,
          hasCompleted: value.has_completed,
        };
      })[0];
    }
    throw Error("Error to get garbage most recent days");
  }

  async getMostRecentDays(): Promise<GarbageDay[]> {
    const query = await supabase.from("v_garbage_days_most_recent").select();
    if (query.data) {
      return query.data.map((value) => {
        return this.mapData(value);
      });
    }
    throw Error("Error to get garbage most recent days");
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
