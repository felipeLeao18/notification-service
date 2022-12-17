import { Notification } from '../notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];
const notificationRepositoryStub = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notification ', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepositoryStub);

    sendNotification.execute({
      content: 'Notification content',
      category: 'social',
      recipientId: 'recipientId',
    });
    expect(sendNotification).toBeTruthy();
    expect(notifications.length).toBe(1);
  });
});
