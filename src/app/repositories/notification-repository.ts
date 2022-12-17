import { Notification } from '../notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
