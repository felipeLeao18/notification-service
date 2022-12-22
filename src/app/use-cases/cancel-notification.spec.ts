import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@app/repositories/in-memory-notification-repository';
import { makeNotification } from '@factories/notification-factory';
import { randomUUID } from 'node:crypto';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Cancel Notification', () => {
  it('should throw when notification to be canceled can not be found', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() =>
      cancelNotification.execute({
        notificationId: randomUUID(),
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification(makeNotification());

    await notificationsRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
