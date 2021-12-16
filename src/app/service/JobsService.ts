import { EmailType } from '../../config/nodemailer';
import Queues from '../../config/queu';

export default class JobsService {
  public static async add(
    jobType: string,
    data: EmailType | any,
  ): Promise<void> {
    const job = Queues.find(job1 => job1.name === jobType);
    job?.bull.add(data);
  }

  public static async process(): Promise<void> {
    Queues.forEach(job => job.bull.process(job.handle));
  }
}
