import { INotificationChannel, INotificationService } from '../core/interfaces';
import { User } from '../models/User';

export class NotificationService implements INotificationService {
  constructor(private channels: INotificationChannel[] = []) {}

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  notify(user: User, message: string): void {
    this.channels.forEach(channel => channel.send(user, message));
  }
}
