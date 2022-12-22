import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@app/repositories/in-memory-notification-repository';
import { makeNotification } from '@factories/notification-factory';
import { randomUUID } from 'node:crypto';
import { NotificationNotFound } from './errors/notification-not-found-error';
import { UnreadNotification } from './unread-notification';

describe('Unread Notification', () => {
  it('should throw when notification to be unread can not be found', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() =>
      unreadNotification.execute({
        notificationId: randomUUID(),
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = new Notification(
      makeNotification({ readAt: new Date() }),
    );

    await notificationsRepository.create(notification);
    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(null);
  });
});
