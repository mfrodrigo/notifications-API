import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send notifications', async () => {
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      content: 'This is sparta',
      category: 'social',
      recipientId: 'execute',
    });

    expect(notification).toBeTruthy();
  });
});
