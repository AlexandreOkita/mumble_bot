/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "./database_client";

const TABLE_NAME = "t_users";

export type User = {
  name: string;
  discordUsername: string;
  id: string;
  createdDt: Date;
};

export default class UsersTable {
  add(name: string, discordUsername: string) {
    supabase
      .from(TABLE_NAME)
      .insert({
        name: name,
        discord_username: discordUsername,
      })
      .then((value) => console.log(value));
  }

  async getAllUsers(): Promise<User[]> {
    return supabase
      .from(TABLE_NAME)
      .select()
      .then((query) => {
        if (query.data) {
          return query.data.map((data) => {
            return this.mapData(data);
          });
        }
        throw Error("Error to get user data!");
      });
  }

  async getUserFromId(userId: string): Promise<User> {
    const query = await supabase
      .from(TABLE_NAME)
      .select()
      .filter("id", "eq", userId);
    const user = this.queryToUser(query);
    if (user) {
      return user[0];
    }
    throw Error("Error to get user from id");
  }

  private queryToUser(query: PostgrestResponse<any>): User[] | undefined {
    if (query.data) {
      return query.data.map((data) => {
        return this.mapData(data);
      });
    }
  }

  private mapData(data: any): User {
    return {
      id: data.id,
      createdDt: data.created_dt,
      name: data.name,
      discordUsername: data.discord_username,
    };
  }
}
