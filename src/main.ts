import { User } from './models/User';
import EmailNotification from './services/EmailNotification';
import { Logger } from './services/Logger';
import { NotificationService } from './services/NotificationService';
import PushNotification from './services/PushNotification';
import SMSNotification from './services/SMSNotification';

const user = new User('example@email.com', '+380123456789', 'device-token-abc');

const logger = new Logger();

const emailNotification = new EmailNotification(logger);
const pushNotification = new PushNotification(logger);
const smsNotification = new SMSNotification(logger);

const notifier = new NotificationService();
notifier.addChannel(emailNotification);
notifier.addChannel(pushNotification);
notifier.addChannel(smsNotification);

notifier.notify(user, 'Ваш платіж оброблено успішно!');
