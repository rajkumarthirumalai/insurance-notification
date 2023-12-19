// scheduler.js
import cron from 'node-cron';

class Scheduler {
  constructor() {
    this.tasks = [];
  }

  scheduleTask(cronExpression, task) {
    this.tasks.push(cron.schedule(cronExpression, task));
  }
}

export default Scheduler;
