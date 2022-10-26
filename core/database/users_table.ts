import supabase from "./database_client";

class UsersTable {
  add(name: string, discordUsername: string) {
    supabase
      .from("users")
      .insert({
        name: name,
        discord_username: discordUsername,
      })
      .then((value) => console.log(value));
  }
}

const usersTable = new UsersTable();
export default usersTable;
