import { Injectable } from "@nestjs/common";
import { Content } from "@app/entities/content";
import { Notification } from "@entities/notification";
import { NotificationRepository } from "@app/repositories/notification-repository";

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(
    request: ISendNotificationRequest
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}
