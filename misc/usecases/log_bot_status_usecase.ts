import UsecaseI from "../../core/usecase_interface";

export default class LogBotStatusUsecase implements UsecaseI<string> {

  run(botName: string): void {
    console.log(`${botName} is online!`);
  }
}