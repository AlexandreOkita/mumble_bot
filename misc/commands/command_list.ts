import CommandI from "../../core/command_interface";
import PingCommand from "./ping_command";

const commandList: CommandI[] = [new PingCommand()];
export default commandList;
