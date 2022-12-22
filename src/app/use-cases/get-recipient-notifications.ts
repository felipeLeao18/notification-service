import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { Notification } from '@app/entities/notification';

interface IGetRecipientNotificationsRequest {
  recipientId: string;
}

interface IGetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: IGetRecipientNotificationsRequest,
  ): Promise<IGetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
