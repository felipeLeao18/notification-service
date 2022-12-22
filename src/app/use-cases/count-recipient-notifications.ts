import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notification-repository';

interface ICountRecipientNotificationsRequest {
  recipientId: string;
}

interface ICountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ICountRecipientNotificationsRequest,
  ): Promise<ICountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
