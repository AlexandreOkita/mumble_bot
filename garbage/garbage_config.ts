import {
  garbageDaysTable,
  messageParser,
  usersTable,
} from "../core/core_config";
import GarbageRepository from "./repositories/garbage_repository";
import ButtonInteractionCreatedSubscriber from "./subscribers/button_interaction_created_subscriber";

//Repositories
export const garbageRepository = new GarbageRepository(
  garbageDaysTable,
  usersTable
);

//subscribers
export const buttonInteractionCreatedSubscriber =
  new ButtonInteractionCreatedSubscriber(garbageRepository, messageParser);
