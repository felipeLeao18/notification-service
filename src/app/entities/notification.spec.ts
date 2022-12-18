import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should create Notification', async () => {
    const notification = new Notification({
      category: 'social',
      recipientId: 'recipientId',
      content: new Content('Nova solicitaçao de amizade'),
    });

    expect(notification).toBeTruthy();
  });
});
