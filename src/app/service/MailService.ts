import Mail, { EmailType } from '../../config/nodemailer';

export default class MAilService {
  public static async send(sms: EmailType): Promise<void> {
    await Mail.sendMail({
      from: 'Queu test <renaldomateus77.dev@gmail.com>',
      to: `${sms.name} <${sms.email}>`,
      subject: 'Cadatro de usuario',
      html: `Bem vindo ${sms.name}`,
    });
  }
}
