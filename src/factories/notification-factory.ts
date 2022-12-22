import { Content } from '@app/entities/content';
import { INotificationProps, Notification } from '@app/entities/notification';

type Override = Partial<INotificationProps>;
export function makeNotification(override?: Override) {
  return new Notification({
    category: 'mock_category',
    content: new Content('mock_content'),
    recipientId: 'recipient_id',
    ...override,
  });
}
