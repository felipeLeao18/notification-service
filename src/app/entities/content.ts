export class Content {
  private content: string;

  constructor(content: string) {
    const isContentValid = this.validateContent(content);

    if (!isContentValid) {
      throw new Error("content validation error");
    }
    this.content = content;
  }

  private validateContent(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }
}
