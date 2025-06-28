import Subscription from '../models/subscription.js';

export const addSubscription = async (userId, ticker) => {
  const sub = new Subscription({ user: userId, ticker });
  return sub.save();
};

export const findByUser = async (userId) => Subscription.find({ user: userId });
export const findAll = async () => Subscription.find().populate('user');
