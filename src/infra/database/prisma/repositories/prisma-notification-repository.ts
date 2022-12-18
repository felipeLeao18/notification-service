import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {

    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data:raw,
    });
  }
}
