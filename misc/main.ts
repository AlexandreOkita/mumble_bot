import BotStartedSubscriber from "./subscribers/bot_started_subscriber";
import InteractionCreatedSubscriber from "./subscribers/interaction_created_subscriber";
import LogBotStatusUsecase from "./usecases/log_bot_status_usecase";

//usecases
const logBotStatusUsecase = new LogBotStatusUsecase();

//subscribers
new BotStartedSubscriber(logBotStatusUsecase).configure();
new InteractionCreatedSubscriber().configure();
