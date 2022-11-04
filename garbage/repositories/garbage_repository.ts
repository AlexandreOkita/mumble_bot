import GarbageDaysTable, {
  GarbageDay,
} from "../../core/database/garbage_days_table";
import UsersTable, { User } from "../../core/database/users_table";

export default class GarbageRepository {
  garbageDaysTable: GarbageDaysTable;
  usersTable: UsersTable;

  constructor(garbageDaysTable: GarbageDaysTable, usersTable: UsersTable) {
    this.garbageDaysTable = garbageDaysTable;
    this.usersTable = usersTable;
  }

  async addGarbageEvent(responsible: User) {
    await this.garbageDaysTable.add(true, responsible.id);
  }

  async getNextResponsible(): Promise<User> {
    const users = await this.usersTable.getAllUsers();
    const recentGarbageDays = await this.garbageDaysTable.getMostRecentDays();
    if (recentGarbageDays.length == users.length) {
      return this.getOlderUserFromRecentGarbageDays(recentGarbageDays, users);
    }
    console.log("aqui")
    return this.filterAndGetNoGarbageDayUser(users, recentGarbageDays);
  }

  private filterAndGetNoGarbageDayUser(
    users: User[],
    recentGarbageDays: GarbageDay[]
  ) {
    const noDayUsers = users.filter((user) => {
      return !recentGarbageDays
        .map((val) => {
          return val.userId;
        })
        .includes(user.id);
    });
    return noDayUsers[0];
  }

  private async getOlderUserFromRecentGarbageDays(
    recentGarbageDays: GarbageDay[],
    users: User[]
  ): Promise<User> {
    const responsibleId = recentGarbageDays.sort(
      (a, b) => a.createdDt.valueOf() - b.createdDt.valueOf()
    )[0].userId;
    const responsibleUser = users.find((value) => {
      return value.id == responsibleId;
    });
    if (responsibleUser) return responsibleUser;
    throw Error("Responsible ID not found in users!");
  }
}
