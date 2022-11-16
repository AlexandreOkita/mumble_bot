/* eslint-disable @typescript-eslint/no-explicit-any */
export default class MessageData {
  eventName: string;
  data: any;

  constructor(eventName: string, data: any) {
    this.data = data;
    this.eventName = eventName;
  }
}
