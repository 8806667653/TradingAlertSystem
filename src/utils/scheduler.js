import { alertSubscribers } from '../services/alertService.js';

export const scheduleAlerts = async () => {
  try {
    await alertSubscribers();
  } catch (err) {
    console.error('Error in scheduled alert', err.message);
  }
};
