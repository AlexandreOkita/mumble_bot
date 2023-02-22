export default class Task {
    id: string;
    name: string;
    lastExecution: Date;
    constructor(id: string, name: string, lastExecution: Date) {
        this.id = id;
        this.name = name;
        this.lastExecution = lastExecution;
    }
}