export default class Reminder {
  id: number;
  isComplete: boolean;
  constructor(public title: string) {
    this.isComplete = false;
    this.id = Date.now();
  }
}
