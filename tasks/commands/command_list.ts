import CommandI from "../../core/command_interface";
import AddTaskCommand from "./addtask_command";
import DeleteTaskCommand from "./deletetask_command";

const commandList: CommandI[] = [new AddTaskCommand(), new DeleteTaskCommand()];
export default commandList;
