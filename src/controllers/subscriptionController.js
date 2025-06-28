import * as subscriptionService from '../services/subscriptionService.js';
import Joi from 'joi';

// Validation schema for subscription requests including custom thresholds

const subSchema = Joi.object({
  ticker: Joi.string().required(),
  entryThreshold: Joi.number().min(1).max(100).default(30),
  exitThreshold: Joi.number().min(1).max(100).default(70),
});

export const subscribe = async (req, res, next) => {
  try {
    const { value, error } = subSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const { ticker, entryThreshold, exitThreshold } = value;
    const sub = await subscriptionService.subscribe(req.user.id, ticker, entryThreshold, exitThreshold);
    res.status(201).json(sub);
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const subs = await subscriptionService.getSubscriptions(req.user.id);
    res.json(subs);
  } catch (err) {
    next(err);
  }
};
