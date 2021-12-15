declare namespace NodeJS {
  interface ProcessEnv {
    NODEMAILER_PORT: number;
    NODEMAILER_HOST: string;
    NODEMAILER_USER: string;
    NODEMAILER_PASS: string;

    REDIS_PORT: number;
  }
}
