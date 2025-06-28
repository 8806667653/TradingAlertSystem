import { addSubscription, findByUser } from '../repositories/subscriptionRepository.js';

export const subscribe = async (userId, ticker) => {
  return addSubscription(userId, ticker.toUpperCase());
};

export const getSubscriptions = async (userId) => findByUser(userId);
