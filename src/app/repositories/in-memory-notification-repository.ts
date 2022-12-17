import { NotificationRepository } from './notification-repository';
import { Notification } from '../entities/notification';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
