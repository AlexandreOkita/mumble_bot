import MessageData from "./message_data";

export default class MessageParser {
  serialize(data: MessageData): string {
    return JSON.stringify(data);
  }

  deserialize(stringData: string): MessageData {
    console.log(stringData);
    const data = JSON.parse(stringData);
    return new MessageData(data.eventName, data.data);
  }
}
