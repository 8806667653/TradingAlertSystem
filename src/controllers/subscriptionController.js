import * as subscriptionService from '../services/subscriptionService.js';
import Joi from 'joi';

const subSchema = Joi.object({
  ticker: Joi.string().required(),
});

export const subscribe = async (req, res, next) => {
  try {
    const { error } = subSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const sub = await subscriptionService.subscribe(req.user.id, req.body.ticker);
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
