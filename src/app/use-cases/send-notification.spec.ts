import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send notifications', async () => {
    const sendNotification = new SendNotification();
    const { notification } = await sendNotification.execute({
      content: 'This is sparta',
      category: 'social',
      recipientId: 'execute',
    });

    expect(notification).toBeTruthy();
  });
});
