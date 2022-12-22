import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface ICancelNotificationRequest {
  notificationId: string;
}

type ICancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ICancelNotificationRequest,
  ): Promise<ICancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();
    console.log(notification);

    await this.notificationRepository.save(notification);
  }
}
