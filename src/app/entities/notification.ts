import { Replace } from '@helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface INotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: INotificationProps;
  private _id: string;

  constructor(
    props: Replace<INotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt() {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
