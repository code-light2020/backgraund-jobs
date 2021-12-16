import MAilService from '../service/MailService';

const registerEmail = {
  key: 'RegisterEmail',
  handle: async (sms: any): Promise<void> => {
    await MAilService.send(sms);
  },
};

export default registerEmail;
