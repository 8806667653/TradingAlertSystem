import { addSubscription, findByUser } from '../repositories/subscriptionRepository.js';

/**
 * Create a new subscription for a user with optional RSI thresholds.
 * Thresholds default to 30/70 when not provided.
 */
export const subscribe = async (userId, ticker, entryThreshold = 30, exitThreshold = 70) => {
  return addSubscription(userId, ticker.toUpperCase(), entryThreshold, exitThreshold);
};

export const getSubscriptions = async (userId) => findByUser(userId);
