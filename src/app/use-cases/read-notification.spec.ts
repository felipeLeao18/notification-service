import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@app/repositories/in-memory-notification-repository';
import { makeNotification } from '@factories/notification-factory';
import { randomUUID } from 'node:crypto';
import { NotificationNotFound } from './errors/notification-not-found-error';
import { ReadNotification } from './read-notification';

describe('Read Notification', () => {
  it('should throw when notification to be read can not be found', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() =>
      readNotification.execute({
        notificationId: randomUUID(),
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = new Notification(makeNotification());

    await notificationsRepository.create(notification);
    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
});
