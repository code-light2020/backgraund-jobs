import Queue from 'bull';
import redisConfig from './redis';
import * as jobs from '../app/jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, {
    redis: {
      host: redisConfig.host,
      port: redisConfig.port,
    },
  }),
  name: job.key,
  handle: job.handle,
}));

export default queues;
