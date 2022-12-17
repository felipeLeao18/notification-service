import { Content } from './content';

describe('Notification Content', () => {
  it('should throw when content length is less than 5', async () => {
    expect(() => new Content('a')).toThrow();
  });

  it('should throw when content length is greater than 240', async () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });

  it('should create notification content', async () => {
    const content = new Content('Voce recebeu uma notificaçao');
    expect(content).toBeTruthy();
  });
});
