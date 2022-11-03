//Repositories

import { garbageDaysTable, usersTable } from "../core/core_config";
import GarbageRepository from "./repositories/garbage_repository";

export const garbageRepository = new GarbageRepository(garbageDaysTable, usersTable);
