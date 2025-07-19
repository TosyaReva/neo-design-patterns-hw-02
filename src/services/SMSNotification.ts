import { ILogger, INotificationChannel } from '../core/interfaces';
import { User } from '../models/User';

export default class SMSNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
