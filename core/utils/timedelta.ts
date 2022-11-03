export default class Timedelta {
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;

  constructor({
    second = 0,
    minute = 0,
    hour = 0,
    day = 0,
    month = 0,
    year = 0,
  }) {
    this.second = second;
    this.minute = minute;
    this.hour = hour;
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

declare global {
  export interface Date {
    addDelta(timedelta: Timedelta): Date;
  }
}

Date.prototype.addDelta = function (timedelta: Timedelta): Date {
  this.setSeconds(this.getSeconds() + timedelta.second);
  this.setMinutes(this.getMinutes() + timedelta.minute);
  this.setHours(this.getHours() + timedelta.hour);
  this.setDate(this.getDate() + timedelta.day);
  this.setMonth(this.getMonth() + timedelta.month);
  this.setFullYear(this.getFullYear() + timedelta.year);
  return this;
};
