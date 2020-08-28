import IMailProvider from '../models/IMailProvider';

interface Message {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: Message[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({ to, body });
  }
}
