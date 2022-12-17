import { InMemoryNotificationsRepository } from '../repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send Notification ', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Notification content',
      category: 'social',
      recipientId: 'recipientId',
    });
    expect(sendNotification).toBeTruthy();

    expect(notificationsRepository.notifications.length).toBe(1);
    expect(notification).toEqual(notificationsRepository.notifications[0]);
  });
});
