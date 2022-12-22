import { Notification } from '@app/entities/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      canceledAt: notification.canceledAt,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
