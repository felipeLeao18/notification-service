import { InMemoryNotificationsRepository } from '@app/repositories/in-memory-notification-repository';
import { makeNotification } from '@factories/notification-factory';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to get recipient notifications count', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    const { count } = await countNotifications.execute({
      recipientId: 'recipient-1',
    });
    expect(count).toBe(2);
  });
});
